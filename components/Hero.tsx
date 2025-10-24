import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToShop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1629569882259-2364c153787a?q=80&w=2070&auto=format&fit=crop')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold uppercase tracking-widest leading-tight">
          Serve. Smash. Laugh. Repeat.
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl mx-auto">
          Because life’s too short for boring shirts.
        </p>
        <a 
          href="#shop" 
          onClick={handleScrollToShop}
          className="mt-8 inline-block bg-[#66BB66] text-black font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-white hover:text-[#66BB66] transition-all duration-300 transform hover:scale-105"
        >
          Shop Our Shirts
        </a>
        <p className="mt-4 text-base text-gray-100 italic">
          Psst... click on any shirt to zoom in and see the details!
        </p>
      </div>
    </section>
  );
};

export default Hero;