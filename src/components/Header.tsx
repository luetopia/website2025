import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <BookOpen className="h-8 w-8 text-blue-900 mr-2 transition-colors group-hover:text-blue-700" />
            <span className="font-serif text-xl font-bold text-blue-900 transition-colors group-hover:text-blue-700">
              Dr. Stefan Lueder
            </span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {['about', 'research', 'publications', 'media', 'teaching', 'qualifications', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 hover:text-blue-900 transition-colors duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-blue-900 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {['about', 'research', 'publications', 'media', 'teaching', 'qualifications', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-gray-700 hover:text-blue-900 transition-colors duration-300 capitalize py-2"
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;