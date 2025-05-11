'use client';
import React from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <div className="w-full py-24 relative overflow-hidden" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col mb-12 px-4 sm:px-6 md:px-8">
          <SectionTitle>Let&apos;s work together!</SectionTitle>
          <p className="text-center text-neutral-200 text-base sm:text-lg mb-4">Have a project in mind? I&apos;d love to help you build a fast, user-friendly web experience!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center px-4 sm:px-6">
            <div className="max-w-full overflow-x-auto whitespace-nowrap flex items-center gap-4 bg-neutral-900 border border-transparent rounded-lg px-5 py-3 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
              <span className="text-white text-lg select-all">thibovonderlynckllc@gmail.com</span>
              <CopyButton email="thibovonderlynckllc@gmail.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CopyButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center w-10 h-10 rounded-lg text-neutral-100 hover:bg-orange-500/10 transition-all duration-300 focus:outline-none relative group ${copied ? 'text-green-500' : ''}`}
    >
      <div className={`absolute transform transition-all duration-200 ${copied ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="3" y="3" width="13" height="13" rx="2"/></svg>
      </div>
      <div className={`absolute transform transition-all duration-200 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </button>
  );
};

export default Contact;