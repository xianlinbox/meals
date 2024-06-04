import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./category/categories";
import MealsOverviewScreen from "./meals/meals-overview";
import MealDetailScreen from "./meals/meal-detail";
import { StatusBar } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen name="categories" options={{ title: "All Categories" }} component={CategoryScreen} />
          <Stack.Screen name="meals-overview" options={{ title: "Meals" }} component={MealsOverviewScreen} />
          <Stack.Screen name="meal-detail" options={{ title: "Meal Detail" }} component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
