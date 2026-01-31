
import React from 'react';

const serviceJourneys = [
  {
    title: "National ID Enrollment",
    description: "The official process for first-time citizen registration (Ages 16+).",
    fee: "Free (First Time Citizens)",
    requirements: [
      "Original LC1 Recommendation Letter (Stamped)",
      "Photocopy of Parent's National ID (NIN)",
      "Original Birth Certificate (if available)",
      "Proof of Citizenship (Ancestry details)"
    ],
    steps: [
      { id: '01', title: "LC1 Recommendation", text: "Obtain a stamped letter from your local village chairman confirming residency." },
      { id: '02', title: "Document Prep", text: "Prepare your parent's NIN copies or original birth certificate for ancestry proof." },
      { id: '03', title: "DISO Verification", text: "Visit your sub-county headquarters for security vetting by the District Internal Security Officer." },
      { id: '04', title: "Biometric Capture", text: "Visit NIRA district office for high-quality photos and fingerprint scanning." }
    ],
    accent: "bg-blue-600"
  },
  {
    title: "ID Replacement / Correction",
    description: "For lost, damaged cards or legal name/date changes.",
    fee: "50,000 UGX",
    requirements: [
      "Police Letter (Report of Loss)",
      "Payment Receipt (PRN from URA)",
      "Legal Proof of Change (Deed Poll for name changes)",
      "Marriage Certificate (for name change due to marriage)"
    ],
    steps: [
      { id: '01', title: "Police Report", text: "Obtain an official police abstract reporting the loss or damage of the ID." },
      { id: '02', title: "Generate PRN", text: "Visit the URA portal to generate a Payment Registration Number for 50,000 UGX." },
      { id: '03', title: "Bank Payment", text: "Pay the fee at any commercial bank and secure the stamped receipt." },
      { id: '04', title: "NIRA Visit", text: "Submit the forms and receipt at the NIRA office where you initially registered." }
    ],
    accent: "bg-red-600"
  },
  {
    title: "Birth Registration",
    description: "Legalize your child's birth and secure their future identity.",
    fee: "5,000 UGX",
    requirements: [
      "Hospital Birth Notification",
      "Parents' National ID copies",
      "Payment Receipt (5,000 UGX via Bank/Mobile Money)"
    ],
    steps: [
      { id: '01', title: "Notification", text: "Get the short birth notification from the hospital where the child was born." },
      { id: '02', title: "Fee Payment", text: "Pay 5,000 UGX via PRN. This can be done at most banks or via Mobile Money." },
      { id: '03', title: "Form Submission", text: "Submit Form NS1 with attachments at your nearest NIRA center." },
      { id: '04', title: "Collection", text: "Collect the Long Birth Certificate after approximately 7-10 working days." }
    ],
    accent: "bg-green-600"
  }
];

const ServicesView: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 py-24 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6 border border-blue-100 dark:border-blue-900/50">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase tracking-widest">Official Guidelines</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 dark:text-slate-100 mb-6 tracking-tight">Citizen Journeys</h2>
          <p className="text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            NIRA Standard Operating Procedures (SOPs) for identity and civil registration.
          </p>
        </div>

        <div className="space-y-40">
          {serviceJourneys.map((journey, idx) => (
            <section key={idx} className="relative">
              <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4 space-y-8">
                  <div className={`w-20 h-20 ${journey.accent} text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20`}>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">{journey.title}</h3>
                  <div className="inline-block px-4 py-2 bg-yellow-400 text-black font-black text-sm rounded-xl">
                    Fee: {journey.fee}
                  </div>
                  <p className="text-xl text-gray-500 dark:text-slate-400 leading-relaxed font-medium">{journey.description}</p>
                  
                  <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800">
                    <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-4">What you'll need:</h4>
                    <ul className="space-y-3">
                      {journey.requirements.map((req, ri) => (
                        <li key={ri} className="flex gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                          <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-8 relative">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 dark:bg-slate-800 -z-10 hidden md:block"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-100 dark:bg-slate-800 -z-10 hidden md:block"></div>
                  
                  {journey.steps.map((step, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                      <div className="text-4xl font-black text-blue-600/10 dark:text-blue-400/10 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                        {step.id}
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-4 tracking-tight">{step.title}</h4>
                      <p className="text-gray-500 dark:text-slate-400 leading-relaxed font-medium">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
