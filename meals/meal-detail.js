import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../models/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.filter((meal) => meal.id == mealId)[0];

  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({});
