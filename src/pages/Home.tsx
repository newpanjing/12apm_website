
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      title: "Premium Quality",
      description: "Durable, weather-resistant materials designed to last."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
      title: "Safe & Certified",
      description: "UL certified for safety and peace of mind."
    },
    {
      icon: <Truck className="h-6 w-6 text-yellow-400" />,
      title: "Fast Shipping",
      description: "Prime delivery available directly through Amazon."
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      title: 'Outdoor String Lights - 48ft Vintage Edison Bulbs',
      price: '$39.99',
      rating: 4.8,
      reviewCount: 1240,
      image: 'https://images.unsplash.com/photo-1547906927-4402660d84c1?auto=format&fit=crop&q=80&w=800',
      amazonLink: '#'
    },
    {
      id: '2',
      title: 'Solar Fairy Lights - 100 LED Warm White',
      price: '$19.99',
      rating: 4.6,
      reviewCount: 850,
      image: 'https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?auto=format&fit=crop&q=80&w=800',
      amazonLink: '#'
    },
    {
      id: '3',
      title: 'Curtain Lights for Bedroom - 300 LED',
      price: '$24.99',
      rating: 4.9,
      reviewCount: 2100,
      image: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&q=80&w=800',
      amazonLink: '#'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490919361849-0d321d258a8a?auto=format&fit=crop&q=80&w=2000" 
            alt="Warm string lights background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/50 to-slate-900" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Light Up Your <span className="text-yellow-400">World</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Create magical moments with 12apm mall's premium decorative lighting. 
            Perfect for patios, bedrooms, and holidays.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/products" 
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-full transition-all hover:scale-105 flex items-center"
            >
              Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Visit Amazon Store
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700/50"
              >
                <div className="p-4 bg-slate-800 rounded-full mb-4 ring-1 ring-yellow-400/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Best Sellers</h2>
          <p className="text-slate-400">Discover the favorites that everyone is talking about.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold border-b-2 border-yellow-400/20 hover:border-yellow-400 transition-all">
            View All Products <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
