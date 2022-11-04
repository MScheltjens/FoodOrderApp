import classes from "./Cart.module.css";
import { cartItems } from "../../data/dummyData";
type Props = {};

const Cart = (props: Props) => {
  return (
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
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
