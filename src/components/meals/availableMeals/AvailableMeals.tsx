import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS as mealsList } from "../../../data/dummyMeals";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {mealsList.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
