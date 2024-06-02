import { FlatList } from "react-native";
import { CATEGORIES } from "../models/dummy-data";
import CategoryTile from "./components/category-tile";

function CategoryScreen({ navigation }) {
  function showMeals(category_id) {
    navigation.navigate("meals-overview", {
      categoryId: category_id,
    });
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <CategoryTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={showMeals.bind(this, itemData.item.id)}
          />
        );
      }}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
