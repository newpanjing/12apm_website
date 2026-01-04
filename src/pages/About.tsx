
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Illuminating Moments Since 2018</h1>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            At 12apm, we believe that lighting is more than just visibility—it's about setting a mood, creating an atmosphere, and making memories. 
            Started by a group of design enthusiasts, we set out to create high-quality, durable, and beautiful lighting solutions for homes around the world.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            We specialize in decorative string lights that transform ordinary spaces into magical getaways. 
            From cozy bedroom corners to festive outdoor patios, our products are designed to bring warmth and joy to your life.
          </p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000" 
            alt="Warm cozy party with string lights" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose 12apm?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Customer First</h3>
            <p className="text-slate-400">We are committed to providing the best shopping experience and top-notch customer support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Quality Assured</h3>
            <p className="text-slate-400">Every product undergoes rigorous testing to ensure durability and safety.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Community</h3>
            <p className="text-slate-400">We love seeing how you use our lights! Join our community of happy customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
