import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://i.imgur.com/NqMqAH6.png" 
              alt="Total Fioul France"
              className="h-24 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour l'approvisionnement en fioul domestique en France.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@total-fioul.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Partout en France</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Produits</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/produits" className="hover:text-white">Fioul Standard</Link></li>
              <li><Link to="/produits" className="hover:text-white">Fioul Premium</Link></li>
              <li><a href="#" className="hover:text-white">Calculateur de prix</a></li>
              <li><a href="#" className="hover:text-white">Devis personnalisé</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/livraison" className="hover:text-white">Livraison Express</Link></li>
              <li><Link to="/contact" className="hover:text-white">Service Client</Link></li>
              <li><a href="#" className="hover:text-white">Suivi de commande</a></li>
              <li><Link to="/livraison" className="hover:text-white">Zone de livraison</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Informations Légales</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:text-white">CGV</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/politique-cookies" className="hover:text-white">Politique de cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-gray-400">
            © 2024 Total Fioul France. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
