
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductProps {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviewCount: number;
  amazonLink: string;
}

const ProductCard = ({ title, price, image, rating, amazonLink }: ProductProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-slate-600'}`}>
              ★
            </span>
          ))}
          <span className="text-slate-400 text-sm ml-2">({rating})</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-2xl font-bold text-yellow-400 mb-4">{price}</p>
        
        <div className="mt-auto">
          <a 
            href={amazonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Buy on Amazon</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
