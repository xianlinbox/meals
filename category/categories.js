import { View, Text, StyleSheet } from "react-native";

function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text>Category</Text>
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
