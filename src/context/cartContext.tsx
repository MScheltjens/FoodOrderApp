import { Meal } from "../components/types";
import { createContext, ReactNode, useContext, useState } from "react";

export interface CartContextInterface {
  items: Meal[];
  totalAmount: number;
  addItem: (item: Meal) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;
