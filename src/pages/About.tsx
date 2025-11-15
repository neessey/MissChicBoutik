import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous aimons la mode et nous nous engageons à vous offrir les meilleures tendances.',
    },
    {
      icon: Star,
      title: 'Qualité',
      description: 'Chaque produit est soigneusement sélectionné pour sa qualité et son style.',
    },
    {
      icon: TrendingUp,
      title: 'Accessibilité',
      description: 'Des prix justes pour rendre la mode accessible à toutes.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">À Propos de MissChicBoutik</h1>

        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <img
            src="/assets/hero-banner-boutique_variant_1.jpg"
            alt="MissChicBoutik"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
          <p className="text-gray-700 mb-4">
            MissChicBoutik est née d'une passion pour la mode et du désir de rendre le style accessible à toutes les femmes d'Abidjan et de Côte d'Ivoire. Située au cœur de Riviera Palmeraie, notre boutique est devenue une destination incontournable pour celles qui recherchent élégance et tendance.
          </p>
          <p className="text-gray-700 mb-4">
            Depuis notre ouverture, nous avons construit une communauté de plus de 88 000 abonnés sur Instagram qui nous font confiance pour leurs achats de vêtements, accessoires et chaussures. Notre succès repose sur notre engagement à offrir des produits de qualité à des prix justes.
          </p>
          <p className="text-gray-700">
            Chaque jour, notre équipe travaille avec passion pour dénicher les dernières tendances et vous proposer une sélection unique qui reflète votre personnalité et votre style.
          </p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
                    <value.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Visitez-nous</h2>
            <p className="text-gray-700 mb-4">
              Nous vous accueillons du lundi au samedi de 9h00 à 19h30 dans notre boutique située à Riviera Palmeraie, rond-point Ado, Abidjan.
            </p>
            <p className="text-gray-700">
              Notre équipe sera ravie de vous conseiller et de vous aider à trouver les pièces parfaites pour votre garde-robe.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}