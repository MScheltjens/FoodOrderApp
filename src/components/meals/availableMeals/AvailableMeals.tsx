import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS as mealsList } from "../../../data/dummyMeals";
import Card from "../../ui/card/Card";
import MealItem from "../mealtem/MealItem";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList.map(({ id, name, description, price }) => (
            <MealItem
              id={id}
              key={id}
              name={name}
              description={description}
              price={price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
