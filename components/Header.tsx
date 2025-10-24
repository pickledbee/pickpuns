import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <a href="#home" className="font-headline text-2xl font-bold text-[#66BB66] tracking-wider">
          PicklePuns Apparel
        </a>
      </div>
    </header>
  );
};

export default Header;