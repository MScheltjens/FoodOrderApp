import { ReactNode, useContext, useEffect, useState } from "react";
import CartContext, { useCartContext } from "../../../context/cartContext";
import CartIcon from "../../icon/CartIcon";
import { Meal } from "../../meals/types";
import classes from "./HeaderCartButton.module.css";

interface HeaderButtonProps {
  onClick: () => void;
  children: ReactNode;
}
const HeaderCartButton = ({ onClick }: HeaderButtonProps) => {
  const [btnHighlighted, setBtnHighlighted] = useState<boolean>(false);
  const { items } = useCartContext();

  const numberOfCartItems = items.reduce((curNumber: number, item) => {
    return curNumber + item.amount!;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
