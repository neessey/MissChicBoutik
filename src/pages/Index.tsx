import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';

export default function Index() {
  const categories = [
    {
      name: 'Vêtements',
      image: '/assets/category-vetements_variant_4.jpg',
      link: '/catalogue?category=vetements',
    },
    {
      name: 'Accessoires',
      image: '/assets/category-accessoires_variant_4.jpg',
      link: '/catalogue?category=accessoires',
    },
    {
      name: 'Chaussures',
      image: '/assets/category-chaussures_variant_4.jpg',
      link: '/catalogue?category=chaussures',
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: 'Partout en Côte d\'Ivoire',
    },
    {
      icon: Shield,
      title: 'Paiement Sécurisé',
      description: 'Wave, MTN, Orange, CB',
    },
    {
      icon: Clock,
      title: 'Service Client',
      description: 'Lun-Sam 9h-19h30',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/hero-banner-boutique.jpg"
            alt="MissChicBoutik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Votre Style, Notre Passion
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom-8 delay-150 duration-700">
            Découvrez notre collection de vêtements, accessoires et chaussures tendance
          </p>
          <Link to="/catalogue">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 animate-in fade-in slide-in-from-bottom-8 delay-300 duration-700">
              Voir le Catalogue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Catégories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                    <Button variant="secondary" size="sm">
                      Découvrir
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
                    <feature.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-xl mb-8 opacity-90">
              88,8K abonnés nous font déjà confiance sur Instagram
            </p>
            <a
              href="https://instagram.com/misschicboutik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Suivez-nous sur Instagram
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}