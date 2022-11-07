import { ReactNode, useReducer } from "react";
import { Meal } from "../components/types";
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

  const clearCart = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContextValue: CartContextInterface = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
    clearCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
