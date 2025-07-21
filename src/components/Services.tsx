import React from 'react';
import { Sparkles, Users, Lightbulb, Scissors, Mic, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "We bring bold ideas to life with original designs and smart branding strategies."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We focus on long-term client relationships through open communication and reliability."
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinking",
      description: "We love solving problems with fresh perspectives and out-of-the-box strategies."
    },
    {
      icon: Scissors,
      title: "Precision Work",
      description: "Every project is crafted with attention to detail, care, and quality."
    },
    {
      icon: Mic,
      title: "Voice of Experience",
      description: "With years of industry insight, we guide you with confident, clear direction."
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "We believe in empowering clients with clarity, learning, and collaboration."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Designed to inspire, empower, and deliver meaningful results across every service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl hover:bg-amber-50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors">
                <service.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
