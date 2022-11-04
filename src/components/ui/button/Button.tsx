import { ReactNode } from "react";
import CartIcon from "../../icon/CartIcon";
import classes from "./Button.module.css";

interface ButtonProps {}
const Button = (props: ButtonProps) => {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default Button;
