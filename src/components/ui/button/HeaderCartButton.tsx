import { ReactNode, useContext } from "react";
import CartContext, { useCartContext } from "../../../context/cartContext";
import CartIcon from "../../icon/CartIcon";
import { Meal } from "../../meals/types";
import classes from "./HeaderCartButton.module.css";

interface HeaderButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const HeaderCartButton = ({ onClick }: HeaderButtonProps) => {
  const { items } = useCartContext();
  const numberOfCartItems = items.reduce((curNumber: number, item) => {
    return curNumber + item.amount!;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
