
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
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
    },
    {
      id: '4',
      title: 'Smart LED Strip Lights - 16.4ft RGB',
      price: '$29.99',
      rating: 4.5,
      reviewCount: 560,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      amazonLink: '#'
    },
    {
      id: '5',
      title: 'Globe String Lights - Battery Operated',
      price: '$15.99',
      rating: 4.4,
      reviewCount: 320,
      image: 'https://images.unsplash.com/photo-1563303649-2d8544d6731d?auto=format&fit=crop&q=80&w=800',
      amazonLink: '#'
    },
    {
      id: '6',
      title: 'Photo Clip String Lights',
      price: '$12.99',
      rating: 4.7,
      reviewCount: 940,
      image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b5a4?auto=format&fit=crop&q=80&w=800',
      amazonLink: '#'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Collection</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Explore our range of high-quality decorative lights. Whether you're decorating your patio, 
          bedroom, or preparing for a holiday, we have the perfect lighting for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
