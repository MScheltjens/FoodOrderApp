import { Meal } from "../components/meals/types";

export const getAllMeals = async (): Promise<Meal[]> => {
  const data = await (
    await fetch(
      "https://react-training-99e5b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    )
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
