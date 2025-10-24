
import React from 'react';

const FloatingButton: React.FC = () => {
  return (
    <a
      href="https://www.etsy.com/shop/PicklePunsApparel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#66BB66] text-black font-bold py-3 px-5 rounded-full shadow-lg hover:bg-white hover:text-[#66BB66] transition-all duration-300 transform hover:scale-110 z-40 flex items-center gap-2"
    >
      <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M11.999 3.75a2.25 2.25 0 00-2.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zm6 0a2.25 2.25 0 00-2.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zM12 11.25a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zm-6-3a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zm12 0a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zM12 17.25a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75z"/></svg>
      <span className="hidden sm:inline">Shop on Etsy</span>
    </a>
  );
};

export default FloatingButton;
