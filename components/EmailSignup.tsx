
import React from 'react';

const EmailSignup: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#66BB66] text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Join the Pickle Club!</h2>
        <p className="mt-2 text-lg">Get exclusive discounts and first dibs on new designs.</p>
        <form 
          action="https://your-mailchimp-or-form-url.com/subscribe" 
          method="post" 
          target="_blank" 
          className="mt-8 max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              name="EMAIL" 
              placeholder="Enter your email" 
              required
              className="flex-grow px-4 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button 
              type="submit"
              className="bg-black text-white font-bold py-3 px-8 rounded-full uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;
