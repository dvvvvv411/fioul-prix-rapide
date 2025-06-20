
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-total-red text-white py-2 px-4 text-center text-sm font-medium">
        🚚 Livraison gratuite à partir de 2000L - Partout en France
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/NqMqAH6.png" 
                alt="Total Fioul France"
                className="h-24"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-total-blue font-medium">
                Accueil
              </a>
              <a href="#produits" className="text-gray-700 hover:text-total-blue font-medium">
                Produits
              </a>
              <a href="#livraison" className="text-gray-700 hover:text-total-blue font-medium">
                Livraison
              </a>
              <a href="#contact" className="text-gray-700 hover:text-total-blue font-medium">
                Contact
              </a>
              <Button className="bg-total-red hover:bg-red-700 text-white font-bold">
                Commander maintenant
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-700 hover:text-total-blue font-medium">
                  Accueil
                </a>
                <a href="#produits" className="text-gray-700 hover:text-total-blue font-medium">
                  Produits
                </a>
                <a href="#livraison" className="text-gray-700 hover:text-total-blue font-medium">
                  Livraison
                </a>
                <a href="#contact" className="text-gray-700 hover:text-total-blue font-medium">
                  Contact
                </a>
                <Button className="bg-total-red hover:bg-red-700 text-white font-bold w-full">
                  Commander maintenant
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
