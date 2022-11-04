import { ReactNode, useReducer } from "react";
import { Meal } from "../components/meals/types";
import { cartItems } from "../data/dummyData";
import CartContext, { CartContextInterface } from "./cartContext";

interface CartProviderProps {
  children: ReactNode;
}

type RAction = { type: "ADD"; item: Meal } | { type: "REMOVE"; id: string };

type RCartState = {
  items: Meal[];
  totalAmount: number;
};

const defaultCart: RCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: RCartState, action: RAction) => {
  if (action.type === "ADD") {
    const updatedItems = [...state.items, action.item];
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCart;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const addItem = (item: Meal) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItem = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContextValue: CartContextInterface = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
