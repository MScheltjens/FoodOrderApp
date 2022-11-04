import { ReactElement } from "react";
import mealsImage from "../../../assets/meals.jpg";
import Button from "../../ui/button/Button";
import classes from "./Header.module.css";

const Header = (): ReactElement => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button>Cart</Button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
