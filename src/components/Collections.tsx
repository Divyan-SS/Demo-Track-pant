import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const brands = [
    {
      title: "Nike Track Pants",
      description: "Performance-driven and stylish track pants for every athlete.",
      image: "/src/assets/nike.jpg",
      items: "50+ Styles"
    },
    {
      title: "Adidas Track Pants",
      description: "Comfort meets function with signature stripes and designs.",
      image: "/src/assets/adidas.jpg",
      items: "65+ Styles"
    },
    {
      title: "Puma Track Pants",
      description: "Bold looks with unmatched flexibility and fit.",
      image: "/src/assets/puma.jpg",
      items: "40+ Styles"
    },
    {
      title: "HRX Track Pants",
      description: "/src/assets/hrx.jpg",
      image: "/src/assets/hrx.jpg",
      items: "30+ Styles"
    },
    {
      title: "Under Armour",
      description: "Train harder with UA’s premium track pant range.",
      image: "/src/assets/underarmor.jpg",
      items: "45+ Styles"
    },
    {
      title: "Reebok Track Pants",
      description: "Classic cuts, modern materials — Reebok redefines motion.",
      image: "/src/assets/reebok.jpg",
      items: "35+ Styles"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Track Pant Collections
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover high-performance and stylish track pants from top athletic brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="text-amber-400 text-sm font-medium">{brand.items}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{brand.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{brand.description}</p>

               
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
