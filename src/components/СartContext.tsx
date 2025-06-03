import React, { createContext, useContext, useState } from "react";

export type CartItem = {
  title: string;
  quantity: number;
  price: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotalCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.title === item.title);
      if (existing) {
        return prev.map(i =>
          i.title === item.title ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const getTotalCount = () => items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, getTotalCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};