//@ts-nocheck

import { Meal } from "../../types";
import classes from "./CartItem.module.css";

interface CartItemProps extends Meal {
  onAdd: (item: Meal, amount: number) => void;
  onRemove: (id: number) => void;
}
const CartItem = ({ price, name, amount, onRemove, onAdd }: CartItemProps) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x{amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
