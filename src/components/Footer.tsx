
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-total-blue text-white px-4 py-2 rounded font-bold text-xl mb-4">
              Total Fioul France
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour l'approvisionnement en fioul domestique en France.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@total-fioul-france.fr</span>
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
              <li><a href="#" className="hover:text-white">Fioul Standard</a></li>
              <li><a href="#" className="hover:text-white">Fioul Premium</a></li>
              <li><a href="#" className="hover:text-white">Calculateur de prix</a></li>
              <li><a href="#" className="hover:text-white">Devis personnalisé</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Livraison Express</a></li>
              <li><a href="#" className="hover:text-white">Service Client</a></li>
              <li><a href="#" className="hover:text-white">Suivi de commande</a></li>
              <li><a href="#" className="hover:text-white">Zone de livraison</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white">CGV</a></li>
              <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2024 Total Fioul France. Tous droits réservés.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
