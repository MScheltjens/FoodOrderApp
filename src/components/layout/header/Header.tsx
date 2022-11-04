import mealsImage from "../../../assets/meals.jpg";
import Button from "../../ui/button/HeaderCartButton";
import classes from "./Header.module.css";

interface HeaderProps {
  onShowCart: () => void;
  onHideCart: () => void;
}

const Header = ({ onShowCart, onHideCart }: HeaderProps) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button onClick={onShowCart}>Cart</Button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
