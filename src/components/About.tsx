import React from 'react';
import { Award, Users, Globe, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: Clock, value: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Story of
              <span className="text-amber-600"> Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2008, Elegance has been at the forefront of fashion innovation, 
              combining timeless designs with contemporary trends. Our commitment to quality 
              and craftsmanship has made us a trusted name in premium fashion.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that fashion is not just about clothing—it's about expressing your 
              individuality and confidence. Every piece in our collection is carefully selected 
              to ensure it meets our high standards of quality and style.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="About Us"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-96 bg-amber-200 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide exceptional fashion experiences that empower individuals to express 
              their unique style while maintaining the highest standards of quality and 
              sustainability in everything we do.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become the global leader in sustainable luxury fashion, inspiring confidence 
              and creativity through innovative designs that respect both people and planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;