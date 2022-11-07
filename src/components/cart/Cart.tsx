// @ts-nocheck
import classes from "./Cart.module.css";
import Modal from "../ui/modal/Modal";
import { useCartContext } from "../../context/cartContext";
import CartItem from "./cartItems/CartItem";
import Checkout from "./checkout/Checkout";
import { useState } from "react";
import { Meal, UserDetails } from "../types";
import { useAddOrderedMeals } from "../hooks/useMealData";

export interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const { totalAmount, items, addItem, removeItem, clearCart } =
    useCartContext();
  const { mutate, isSuccess, error } = useAddOrderedMeals();

  const orderHandler = (body: { user: UserDetails; items: Meal[] }) => {
    setIsCheckingOut(true);
    mutate(body);
  };

  if (isSuccess) {
    clearCart();
  }

  return (
    <Modal onClose={onClose}>
      <div>
        <ul className={classes["cart-items"]}>
          {items.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={() => {
                const cartItem = { ...item, amount: 1 };
                addItem(cartItem);
              }}
              onRemove={() => {
                removeItem(item.id!);
              }}
            />
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        {isCheckingOut && (
          <Checkout onConfirm={orderHandler} onClose={onClose} />
        )}
        {!isCheckingOut && (
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={onClose}>
              Close
            </button>
            {/*@-ts-ignore*/}
            {items.length > 0 && (
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
