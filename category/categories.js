import { FlatList } from "react-native";
import { CATEGORIES } from "../models/dummy-data";
import CategoryTile from "./components/category-tile";

function CategoryScreen() {
  function showMeals() {}
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return <CategoryTile title={itemData.item.title} color={itemData.item.color} onPress={showMeals} />;
      }}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
