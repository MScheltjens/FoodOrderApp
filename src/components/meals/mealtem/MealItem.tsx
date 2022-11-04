import classes from "./MealItem.module.css";
import { Meal } from "../types";
import MealItemForm from "../mealItemForm/MealItemForm";

interface MealProps extends Meal {}

const MealItem = ({ name, description, price }: MealProps) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
