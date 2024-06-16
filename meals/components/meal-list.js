import { View, FlatList, StyleSheet } from "react-native";
import MealCard from "./meal-card";

function MealList({ meals }) {
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

export default MealList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
