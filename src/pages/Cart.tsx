import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { items, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Votre panier est vide</h2>
          <p className="text-gray-600 mb-6">
            Découvrez notre collection et ajoutez des articles à votre panier
          </p>
          <Link to="/catalogue">
            <Button className="bg-pink-600 hover:bg-pink-700">
              Voir le Catalogue
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Mon Panier</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} item={item} />
          ))}
          
          <Button
            variant="outline"
            onClick={clearCart}
            className="w-full text-red-600 hover:text-red-700"
          >
            Vider le panier
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Résumé de la commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Sous-total</span>
                <span>{getTotal().toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Livraison</span>
                <span>À calculer</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-pink-600">{getTotal().toLocaleString()} FCFA</span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Passer la commande
                </Button>
              </Link>
              
              <Link to="/catalogue">
                <Button variant="outline" className="w-full">
                  Continuer mes achats
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}