import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MissChicBoutik</h3>
            <p className="text-sm">
              Votre destination mode à Abidjan. Vêtements, accessoires et chaussures tendance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalogue" className="hover:text-pink-400 transition-colors">Catalogue</Link></li>
              <li><Link to="/about" className="hover:text-pink-400 transition-colors">À Propos</Link></li>
              <li><Link to="/delivery" className="hover:text-pink-400 transition-colors">Livraison</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Riviera Palmeraie, rond-point Ado, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+2250778182222" className="hover:text-pink-400 transition-colors">
                  +225 07 78 18 22 22
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Lun-Sam: 9h00 - 19h30</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/misschicboutik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/misschicboutik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm mt-4">88,8K abonnés sur Instagram</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 MissChicBoutik. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}