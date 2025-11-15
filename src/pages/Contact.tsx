import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé avec succès ! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                Envoyer le message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-700">
                    Riviera Palmeraie, rond-point Ado<br />
                    Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Téléphone / WhatsApp</p>
                  <a href="tel:+2250778182222" className="text-pink-600 hover:underline">
                    +225 07 78 18 22 22
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Horaires</p>
                  <p className="text-gray-700">
                    Lundi - Samedi : 9h00 - 19h30<br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@misschicboutik.com" className="text-pink-600 hover:underline">
                    contact@misschicboutik.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suivez-nous</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://instagram.com/misschicboutik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Instagram className="h-6 w-6 text-pink-600" />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-gray-600">88,8K abonnés</p>
                </div>
              </a>
              
              <a
                href="https://facebook.com/misschicboutik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Facebook className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Facebook</p>
                  <p className="text-sm text-gray-600">Rejoignez notre communauté</p>
                </div>
              </a>
            </CardContent>
          </Card>

          {/* Google Maps */}
          <Card>
            <CardHeader>
              <CardTitle>Localisation</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://maps.app.goo.gl/z3eAMgFeVWAk2MFe9"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-pink-600 mb-2" />
                    <p className="font-semibold">Voir sur Google Maps</p>
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}