import classes from "./Cart.module.css";
import { cartItems } from "../../data/dummyData";
import Modal from "../ui/modal/Modal";

interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  return (
    <Modal onClose={onClose}>
      <div>
        <ul className={classes["cart-items"]}>
          {cartItems.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>9876</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
