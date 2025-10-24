
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
import About from './components/About';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Shop />
        <About />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default App;