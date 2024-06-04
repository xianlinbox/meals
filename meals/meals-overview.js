import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable, Platform } from "react-native";
import { CATEGORIES, MEALS } from "../models/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const category_id = route.params.categoryId;
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(category_id) >= 0;
  });
  function showMealDetail(mealId) {
    navigation.navigate("meal-detail", { mealId: mealId });
  }

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
          const { id, title, imageUrl, duration, complexity, affordability } = itemData.item;
          return (
            <View style={styles.mealItem}>
              <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={showMealDetail.bind(this, id)}
              >
                <View style={styles.innerContainer}>
                  <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
