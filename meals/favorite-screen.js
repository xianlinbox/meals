import { Text, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorite-context";
import MealList from "./components/meal-list";
import { MEALS } from "../models/dummy-data";
function FavoriteScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.mealIds.includes(meal.id));

  return <MealList meals={favoriteMeals} />;
}

export default FavoriteScreen;
