import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen({ route }) {
  const category_id = route.params.categoryId;
  return (
    <View>
      <Text>Category: {category_id}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
