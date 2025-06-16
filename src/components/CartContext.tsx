import React, { createContext, useContext, useState } from "react";

export type CartItem = {
  title: string;
  basePrice: number;
  URL: string;
  adults: number;   
  children: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotalCount: () => number;
  removeFromCart: (title: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.title === item.title);
      if (existing) {
        return prev.map(i =>
          i.title === item.title
           ? {
             ...i,
              adults: i.adults + item.adults,
              children: i.children + item.children,
              
             } : i
        );
      }
      return [...prev, item];
    });
  };

   const removeFromCart = (title: string) => {
    setItems(prev => prev.filter(i => i.title !== title));
  };

  const getTotalCount = () => items.reduce((total, item) => total + item.adults + item.children, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, getTotalCount, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};