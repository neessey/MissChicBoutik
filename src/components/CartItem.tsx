import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 border rounded-lg">
      <img
        src={item.product.images[0]}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.name}</h3>
        <p className="text-sm text-gray-600">{item.product.description}</p>
        
        {item.selectedSize && (
          <p className="text-sm text-gray-600 mt-1">Taille: {item.selectedSize}</p>
        )}
        {item.selectedColor && (
          <p className="text-sm text-gray-600">Couleur: {item.selectedColor}</p>
        )}
        
        <p className="text-lg font-bold text-pink-600 mt-2">
          {item.product.price.toLocaleString()} FCFA
        </p>
      </div>
      
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeFromCart(item.product.id)}
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}