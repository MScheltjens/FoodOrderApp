import classes from "./AvailableMeals.module.css";
import Card from "../../ui/card/Card";
import MealItem from "../mealtem/MealItem";
import { ReactElement } from "react";
import { useGetAllMeals } from "../../hooks/useMealData";

const AvailableMeals = (): ReactElement => {
  const { data: meals, isLoading, isError } = useGetAllMeals();

  if (isLoading) return <p className={classes.mealsLoading}>Loading...</p>;
  if (isError) return <section>Something went wrong!</section>;
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>
            {meals?.map(({ id, name, description, price }) => (
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
    </>
  );
};

export default AvailableMeals;
