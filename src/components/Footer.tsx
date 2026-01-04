
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">12apm mall</h3>
            <p className="mb-4 text-slate-400 max-w-sm">
              Illuminating your moments with warmth and magic. Premium decorative lights for every occasion.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="hover:text-yellow-400 transition-colors">Products</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="mailto:support@12apm.com" className="hover:text-yellow-400 transition-colors"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} 12apm mall. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
