import { Meal, UserDetails } from "../components/types";

export interface IAddOrderedMeals {
  user: UserDetails;
  items: Meal[];
}

export const getAllMeals = async (): Promise<Meal[]> => {
  const res = await fetch(`${import.meta.env.VITE_ENDPOINT}/meals.json`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();

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

export const addOrderedMeals = async (
  body: IAddOrderedMeals
): Promise<{ name: string }> => {
  const res = await fetch(`${import.meta.env.VITE_ENDPOINT}/orders.json`, {
    method: "POST",
    body: JSON.stringify({
      body: body ? JSON.stringify(body) : undefined,
    }),
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
