import classes from "./AvailableMeals.module.css";

import Card from "../../ui/card/Card";
import MealItem from "../mealtem/MealItem";
import { ReactElement, useEffect } from "react";
import { getAllMeals } from "../../../utils/apiService";
import { useQuery } from "react-query";

const AvailableMeals = (): ReactElement => {
  const { data: meals, isLoading, isError } = useQuery("todos", getAllMeals);

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
