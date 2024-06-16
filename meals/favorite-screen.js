import { Text, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorite-context";
import MealCard from "./components/meal-card";
import { MEALS } from "../models/dummy-data";
function FavoriteScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.mealIds.includes(meal.id));

  return (
    <View>
      <Text>This is the favorite screen</Text>
    </View>
  );
}

export default FavoriteScreen;
