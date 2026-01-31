
import React, { useState } from 'react';
import { analyzeDocument } from '../services/gemini';

interface DocumentAnalyzerProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const DocumentAnalyzer: React.FC<DocumentAnalyzerProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setIsAnalyzing(true);
    try {
      const base64 = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];
      const result = await analyzeDocument(base64, mimeType);
      setAnalysis(result || "No clear information could be extracted.");
    } catch (error) {
      console.error(error);
      setAnalysis("Error analyzing document. Please ensure the image is clear and try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-blue-50 dark:bg-blue-900/10">
          <div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400">Smart Document Check</h3>
            <p className="text-xs text-blue-600 dark:text-blue-300 font-medium">Instantly extract information from your NIRA documents</p>
          </div>
          <button onClick={onClose} className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-video bg-gray-100 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden group">
                {image ? (
                  <img src={image} className="w-full h-full object-contain" alt="Selected Document" />
                ) : (
                  <div className="text-center p-6">
                    <svg className="w-10 h-10 text-gray-300 dark:text-slate-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    <p className="text-xs text-gray-500 dark:text-slate-500">Upload ID photo or Birth Certificate</p>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileSelect}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={!image || isAnalyzing}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Analyzing...
                  </>
                ) : 'Extract Data'}
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 flex flex-col">
              <h4 className="text-sm font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-4">Results</h4>
              {analysis ? (
                <div className="text-sm text-gray-700 dark:text-slate-300 whitespace-pre-wrap flex-grow prose prose-sm dark:prose-invert">
                  {analysis}
                </div>
              ) : (
                <div className="flex-grow flex items-center justify-center text-center">
                  <p className="text-gray-400 dark:text-slate-600 italic text-sm">Upload and process a document to see extracted details here.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 text-center">
          <p className="text-[10px] text-gray-400 dark:text-slate-600 font-medium leading-relaxed uppercase tracking-tighter">
            Data processed locally for analysis. Always verify important documents manually. <br />
            Powered by Gemini 3 Pro Vision Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalyzer;
