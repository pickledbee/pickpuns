import React from 'react';
import { socialLinks } from '../constants';

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => {
    // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
    const icons: { [key: string]: React.ReactElement } = {
        facebook: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>,
        instagram: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>,
        etsy: <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M11.999 3.75a2.25 2.25 0 00-2.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zm6 0a2.25 2.25 0 00-2.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zM12 11.25a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zm-6-3a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zm12 0a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75zM12 17.25a2.25 2.25 0 00-2.25 2.25v.75a.75.75 0 01-1.5 0v-.75a3.75 3.75 0 013.75-3.75h.75a.75.75 0 010 1.5h-.75z"/></svg>,
    };
    return icons[icon] || null;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#66BB66] transition-colors duration-300"
                aria-label={link.name}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mb-4 max-w-2xl">
            Disclaimer: We link to Etsy for all purchases. We’re an independent brand promoting laughter, not competition. All transactions are securely handled by Etsy.
          </p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PicklePuns Apparel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;