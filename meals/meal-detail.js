import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { FavoritesContext } from "../store/favorite-context";
import IconButton from "./components/icon-button";
import Subtitle from "./components/subtitle";
import List from "./components/list";
import { MEALS } from "../models/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsContext = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id == mealId);
  const { duration, complexity, affordability } = meal;
  const isFavorite = favoriteMealsContext.mealIds.includes(mealId);
  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      favoriteMealsContext.removeMeal(mealId);
    } else {
      favoriteMealsContext.addMeal(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon={isFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoriteStatusHandler} />
        );
      },
    });
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: { width: "100%", height: 350 },
  title: { fontWeight: "bold", fontSize: 24, margin: 8, textAlign: "center", color: "white" },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
