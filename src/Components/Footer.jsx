import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
        
        {/* About */}
        <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Shaheed-e-Azam</h3>
            <p className="text-gray-400 leading-relaxed pr-4">
                Dedicated to the service of humanity in the spirit of our martyrs. 
                We believe in equal access to food, health, and education for every citizen.
            </p>
        </div>

        {/* Links */}
        <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
                <li><a href="#home" className="hover:text-brand-orange transition">Home</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition">About Us</a></li>
                <li><a href="#donate" className="hover:text-brand-orange transition">Donate</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition">Contact</a></li>
            </ul>
        </div>

        {/* Contact */}
        <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="text-brand-orange"/>
                <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
                <Mail size={18} className="text-brand-orange"/>
                <span>help@shaheed-e-azam.org</span>
            </div>
            
            <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/share/1EnXZP6rdX/" target='blank' className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange transition"><Facebook size={20}/></a>
                <a href="https://x.com/seas_foundation" target='blank'  className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange transition"><Twitter size={20}/></a>
                <a href="https://www.instagram.com/seas_foundation?igsh=MWU1M3Q5eWE3MWQ5aQ==" target='blank'  className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange transition"><Instagram size={20}/></a>
            </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center pt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Shaheed-e-Azam NGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;