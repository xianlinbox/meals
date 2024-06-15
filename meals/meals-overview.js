import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../models/dummy-data";
import MealCard from "./components/meal-card";

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

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <MealCard meal={itemData.item}></MealCard>;
        }}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
