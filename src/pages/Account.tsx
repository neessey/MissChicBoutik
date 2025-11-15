import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Package, LogOut } from 'lucide-react';

export default function Account() {
  const { user, orders, logout } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <User className="h-24 w-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Connectez-vous</h2>
          <p className="text-gray-600 mb-6">
            Accédez à votre compte pour voir vos commandes
          </p>
          <Link to="/login">
            <Button className="bg-pink-600 hover:bg-pink-700">
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: 'En attente', className: 'bg-yellow-100 text-yellow-800' },
      processing: { label: 'En cours', className: 'bg-blue-100 text-blue-800' },
      shipped: { label: 'Expédié', className: 'bg-purple-100 text-purple-800' },
      delivered: { label: 'Livré', className: 'bg-green-100 text-green-800' },
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Mon Compte</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Nom</p>
                <p className="font-semibold">{user.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Téléphone</p>
                <p className="font-semibold">{user.phone}</p>
              </div>
              
              <Button
                onClick={logout}
                variant="outline"
                className="w-full text-red-600 hover:text-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Se déconnecter
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Orders History */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Mes Commandes
              </CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-4">Aucune commande pour le moment</p>
                  <Link to="/catalogue">
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      Commencer mes achats
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-semibold">Commande #{order.id}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          {getStatusBadge(order.status)}
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item) => (
                            <div
                              key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                              className="flex justify-between text-sm"
                            >
                              <span>
                                {item.product.name} x{item.quantity}
                              </span>
                              <span>{(item.product.price * item.quantity).toLocaleString()} FCFA</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="font-semibold">Total</span>
                          <span className="text-lg font-bold text-pink-600">
                            {order.total.toLocaleString()} FCFA
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}