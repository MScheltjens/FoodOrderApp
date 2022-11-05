import classes from "./Cart.module.css";
import Modal from "../ui/modal/Modal";
import { useCartContext } from "../../context/cartContext";
import CartItem from "./cartItems/CartItem";
import { Meal } from "../meals/types";

interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  const { totalAmount, items, addItem, removeItem } = useCartContext();

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
                addItem(item, 1);
              }}
              onRemove={() => {}}
            />
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onClose}>
            Close
          </button>
          {items.length > 0 && (
            <button className={classes.button}>Order</button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
