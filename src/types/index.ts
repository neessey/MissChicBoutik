export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'vetements' | 'accessoires' | 'chaussures';
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  paymentMethod: 'wave' | 'mtn' | 'orange' | 'card';
  createdAt: Date;
  shippingAddress: string;
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  color?: string;
  search?: string;
}