import classes from "./MealItem.module.css";
import { Meal } from "../types";
interface MealProps extends Meal {}

const MealItem = ({ name, description, price }: Meal) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{`$${price.toFixed(2)}`}</div>
      </div>
    </li>
  );
};

export default MealItem;
