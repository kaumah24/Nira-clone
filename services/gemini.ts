
import { GoogleGenAI, Type, Modality } from "@google/genai";

const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

const NIRA_INTERNAL_RESOURCES = `
AVAILABLE DOWNLOADABLE FORMS (Direct the user to the Downloads tab for these):
- Form NS3: Application for National ID (Citizens)
- Form NS1: Birth Registration Form
- Form DS1: Death Registration Form
- Form AL1: Alien Registration Application
- Form CH1: Change of Particulars Form
- Form RE1: Replacement of Lost ID Form

FREQUENTLY ASKED QUESTIONS (FAQs):
Q: How long does it take to get a National ID?
A: Typically 4 to 8 weeks after successful enrollment.
Q: Is registration free?
A: First-time registration for citizens is free. Replacement of lost cards or change of particulars attracts a fee (standardly 50,000 UGX).
Q: Where do I find NIRA offices?
A: NIRA has offices at every District Headquarters across Uganda and the head office at Kololo Ceremonial Grounds.
Q: What do I do if I lose my NIN?
A: Visit a NIRA office with a police report to apply for a replacement or use the *216# USSD code for basic checks.
`;

/**
 * Perform Search Grounding for NIRA inquiries using Gemini 3 Flash.
 * Enhanced with internal FAQ and Form knowledge.
 */
export async function askNIRA(query: string) {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [{ role: 'user', parts: [{ text: query }] }],
    config: {
      systemInstruction: `You are the official NIRA (National Identification and Registration Authority) virtual assistant for Uganda. 
      Answer questions accurately about National IDs, Birth/Death registration, Alien registration, and related processes in Uganda.
      
      INTERNAL KNOWLEDGE BASE:
      ${NIRA_INTERNAL_RESOURCES}
      
      GUIDELINES:
      1. Use the Internal Knowledge Base above to answer FAQs quickly.
      2. If a user asks for a form, mention the specific Form Code (e.g., NS3) and tell them it's available in the 'Downloads' tab of this portal.
      3. Use Google Search to provide the latest news or trending updates regarding NIRA exercises.
      4. Always be professional, reassuring, and clear.`,
      tools: [{ googleSearch: {} }],
    },
  });

  const text = response.text || "I couldn't find a specific answer to that right now.";
  const sources: any[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  
  const formattedSources = sources.map(chunk => ({
    title: chunk.web?.title,
    uri: chunk.web?.uri
  })).filter(s => s.uri);

  return { text, sources: formattedSources };
}

/**
 * Analyze identity documents or application forms using Gemini 3 Pro.
 */
export async function analyzeDocument(base64Data: string, mimeType: string) {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType } },
        { text: "Analyze this document. Identify if it is a Ugandan National ID, Birth Certificate, or NIRA application form. Extract key details such as Name, NIN (if applicable), Date of Birth, and indicate if the document appears valid or if information is missing/unclear. Provide the response in clear bullet points." }
      ]
    }
  });

  return response.text;
}

/**
 * Generate Speech from text using Gemini 2.5 Flash TTS.
 */
export async function generateSpeech(text: string) {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Read this clearly for a Ugandan citizen: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' }, // Clear, professional voice
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  return base64Audio;
}

/**
 * Helper to play PCM audio returned by TTS
 */
export async function playPCMAudio(base64Audio: string) {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  
  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext) => {
    const dataInt16 = new Int16Array(data.buffer);
    const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < dataInt16.length; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }
    return buffer;
  };

  const bytes = decode(base64Audio);
  const audioBuffer = await decodeAudioData(bytes, audioContext);
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
}
