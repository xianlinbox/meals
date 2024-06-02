import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
function CategoryTile({ title, color, onPress }) {
  return (
    <View style={styles.categoryTile}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.pressable, styles.pressed] : styles.pressable)}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  categoryTile: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: { flex: 1, padding: 16, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
