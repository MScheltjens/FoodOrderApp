import { ReactNode, useReducer } from "react";
import { Meal } from "../components/meals/types";
import CartContext, { CartContextInterface } from "./cartContext";
import cartReducer, { defaultCart } from "../reducer/cartReducer";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const addItem = (item: Meal) => {
    dispatchCartAction({ type: "ADD", item: item });
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
