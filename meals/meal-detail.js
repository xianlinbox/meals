import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { MEALS } from "../models/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id == mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <View></View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: { width: "100%", height: 350 },
  title: { fontWeight: "bold", fontSize: 24, margin: 8, textAlign: "center", color: "white" },
});
