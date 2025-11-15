import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Truck, CreditCard, Clock } from 'lucide-react';

export default function Delivery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Livraison & Paiement</h1>

        <div className="space-y-6">
          {/* Delivery Zones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-pink-600" />
                Zones de Livraison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Abidjan et environs</h3>
                <p className="text-gray-700">
                  Livraison disponible dans toutes les communes d'Abidjan (Cocody, Yopougon, Abobo, Adjamé, Plateau, Marcory, Koumassi, Port-Bouët, Attécoubé, Treichville).
                </p>
                <p className="text-pink-600 font-semibold mt-2">Délai : 24-48 heures</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Intérieur de la Côte d'Ivoire</h3>
                <p className="text-gray-700">
                  Nous livrons partout en Côte d'Ivoire : Bouaké, Yamoussoukro, San-Pédro, Daloa, Korhogo, Man, et toutes les autres villes.
                </p>
                <p className="text-pink-600 font-semibold mt-2">Délai : 3-5 jours ouvrables</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Expéditions internationales</h3>
                <p className="text-gray-700">
                  Nous proposons également des expéditions vers certains pays africains. Contactez-nous pour plus d'informations.
                </p>
                <p className="text-pink-600 font-semibold mt-2">Délai : Sur demande</p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-pink-600" />
                Processus de Livraison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>Passez votre commande en ligne ou contactez-nous via WhatsApp</li>
                <li>Confirmez votre adresse de livraison et choisissez votre mode de paiement</li>
                <li>Recevez une confirmation de commande avec le numéro de suivi</li>
                <li>Notre équipe prépare votre colis avec soin</li>
                <li>Vous recevez votre commande à l'adresse indiquée</li>
                <li>Vérifiez votre colis en présence du livreur</li>
              </ol>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-pink-600" />
                Moyens de Paiement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Paiement Mobile</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Wave</strong> : Paiement instantané et sécurisé</li>
                  <li>• <strong>MTN Money</strong> : Transfert mobile MTN</li>
                  <li>• <strong>Orange Money</strong> : Paiement via Orange Money</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Carte Bancaire</h3>
                <p className="text-gray-700">
                  Nous acceptons les cartes Visa et Mastercard. Tous les paiements sont sécurisés et cryptés.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Paiement à la livraison</h3>
                <p className="text-gray-700">
                  Disponible pour les livraisons à Abidjan uniquement. Payez en espèces lors de la réception de votre commande.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-pink-600" />
                Horaires de Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p><strong>Lundi - Samedi :</strong> 9h00 - 19h30</p>
                <p><strong>Dimanche :</strong> Fermé</p>
                <p className="mt-4 text-sm">
                  Les commandes passées après 17h00 seront traitées le jour ouvrable suivant.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Questions */}
          <Card className="bg-pink-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Des questions sur votre livraison ?</h3>
              <p className="text-gray-700 mb-4">
                Notre équipe est disponible pour répondre à toutes vos questions
              </p>
              <a
                href="https://wa.me/2250778182222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 font-semibold hover:underline"
              >
                Contactez-nous sur WhatsApp : +225 07 78 18 22 22
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}