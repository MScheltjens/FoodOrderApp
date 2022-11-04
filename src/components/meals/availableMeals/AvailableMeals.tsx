import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS as mealsList } from "../../../data/dummyMeals";
import Card from "../../ui/card/Card";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
