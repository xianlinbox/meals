import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../models/dummy-data";
import MealList from "./components/meal-list";

function MealsOverviewScreen({ route, navigation }) {
  const category_id = route.params.categoryId;
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(category_id) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === category_id).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [category_id, navigation]);

  return <MealList meals={meals} />;
}

export default MealsOverviewScreen;
