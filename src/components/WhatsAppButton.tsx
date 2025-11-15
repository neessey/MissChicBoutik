import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const phoneNumber = '2250778182222';
  const message = 'Bonjour MissChicBoutik, je souhaite obtenir plus d\'informations.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-green-500 hover:bg-green-600 z-50"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}