import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { Order } from '@/types';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    paymentMethod: 'wave' as 'wave' | 'mtn' | 'orange' | 'card',
  });

  type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "wave" | "mtn" | "orange" | "card";
};

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
      
    }

    const order: Order = {
      id: Date.now().toString(),
      userId: user?.id || 'guest',
      items,
      total: getTotal(),
      status: 'pending',
      paymentMethod: formData.paymentMethod,
      createdAt: new Date(),
      shippingAddress: formData.address,
    };

    await sendWhatsAppToSeller(order, formData);

    addOrder(order);
    clearCart();
    toast.success('Commande passée avec succès !');
    navigate('/account');
  };

  const sendWhatsAppToSeller = async (order: Order, formData:CheckoutFormData) => {
  const sellerNumber = "22504272827"; // Ton numéro WhatsApp (sans +)
  const apiKey = "6713596";           // Ta clé API CallMeBot (sans espace)

  const message = `
Nouvelle commande !
ID: ${order.id}
Nom: ${formData.name}
Téléphone: ${formData.phone}
Adresse: ${formData.address}
Paiement: ${formData.paymentMethod}
Total: ${order.total} FCFA

Produits:
${order.items.map(i => `- ${i.product.name} x${i.quantity}`).join("\n")}
  `;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${sellerNumber}&text=${encodeURIComponent(
    message
  )}&apikey=${apiKey}`;

  try {
    await fetch(url);
    console.log("Message WhatsApp envoyé !");
  } catch (err) {
    console.error("Erreur envoi WhatsApp :", err);
  }
};


  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Finaliser la commande</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Adresse de livraison</CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="address">Adresse complète *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Commune, quartier, rue, indication..."
                  rows={4}
                  required
                />
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Méthode de paiement</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, paymentMethod: value as 'wave' | 'mtn' | 'orange' | 'card' })
                  }
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="wave" id="wave" />
                    <Label htmlFor="wave" className="cursor-pointer flex-1">
                      <div className="font-semibold">Wave</div>
                      <div className="text-sm text-gray-600">Paiement mobile Wave</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="mtn" id="mtn" />
                    <Label htmlFor="mtn" className="cursor-pointer flex-1">
                      <div className="font-semibold">MTN Money</div>
                      <div className="text-sm text-gray-600">Paiement mobile MTN</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="orange" id="orange" />
                    <Label htmlFor="orange" className="cursor-pointer flex-1">
                      <div className="font-semibold">Orange Money</div>
                      <div className="text-sm text-gray-600">Paiement mobile Orange</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="cursor-pointer flex-1">
                      <div className="font-semibold">Carte Bancaire</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard</div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
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
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-pink-600">{getTotal().toLocaleString()} FCFA</span>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                  Confirmer la commande
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}