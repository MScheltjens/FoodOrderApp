import classes from "./MealItem.module.css";
import { Meal } from "../types";
import MealItemForm from "../mealItemForm/MealItemForm";
import { useCartContext } from "../../../context/cartContext";

interface MealProps extends Meal {}

const MealItem = ({ id, name, description, price }: MealProps) => {
  const { addItem } = useCartContext();
  const addToCartHandler = (amount: number) => {
    addItem({ id, name, description, price, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={+id} />
      </div>
    </li>
  );
};

export default MealItem;
