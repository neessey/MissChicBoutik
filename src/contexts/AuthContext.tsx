import { createContext, useContext, useState, ReactNode } from 'react';
import { User, Order } from '@/types';

interface AuthContextType {
  user: User | null;
  orders: Order[];
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
  addOrder: (order: Order) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const login = async (email: string, password: string) => {
    // Simulation de connexion
    const mockUser: User = {
      id: '1',
      name: 'Client MissChic',
      email,
      phone: '+225 07 00 00 00 00',
    };
    setUser(mockUser);
  };

  const register = async (name: string, email: string, password: string, phone: string) => {
    // Simulation d'inscription
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      phone,
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  return (
    <AuthContext.Provider value={{ user, orders, login, register, logout, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}