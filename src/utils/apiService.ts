import { Meal } from "../components/meals/types";

export const getAllMeals = async (): Promise<Meal[]> => {
  const data = await (
    await fetch(`${import.meta.env.VITE_ENDPOINT}/meals.json`)
  ).json();
  const loadedMeals = [];

  for (const key in data) {
    loadedMeals.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    });
  }
  console.log(loadedMeals);
  return loadedMeals;
};
