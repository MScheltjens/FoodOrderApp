import { ReactElement } from "react";
import MealsSummary from "./mealsSummary/MealsSummary";
import AvailableMeals from "./availableMeals/AvailableMeals";

const Meals = (): ReactElement => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
