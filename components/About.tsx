import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">About PicklePuns</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At PicklePuns Apparel, we combine the love of the game with humor and style. Every shirt is made for players who know that laughter is the best doubles partner. We believe pickleball is more than a sport—it's a community built on fun, friendship, and the occasional perfectly placed dink.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our mission is to bring a little extra joy to the court, one punny shirt at a time.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;