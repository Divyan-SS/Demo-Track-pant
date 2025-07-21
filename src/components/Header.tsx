import React, { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">ELEGANCE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#collections" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Collections
              </a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-slate-600 hover:text-amber-600 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-slate-600 hover:text-amber-600 cursor-pointer transition-colors" />
            <ShoppingBag className="h-5 w-5 text-slate-600 hover:text-amber-600 cursor-pointer transition-colors" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#collections" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">
                Collections
              </a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;