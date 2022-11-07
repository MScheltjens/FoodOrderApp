import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import {
  addOrderedMeals,
  getAllMeals,
  IAddOrderedMeals,
} from "../../utils/apiService";
import { Meal } from "../types";

export const useGetAllMeals = (): UseQueryResult<Meal[], Error> => {
  return useQuery("meals", getAllMeals);
};

export const useAddOrderedMeals = (): UseMutationResult<
  { name: string },
  Error,
  IAddOrderedMeals
> => {
  return useMutation(addOrderedMeals);
};
