import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./category/categories";
import MealsOverviewScreen from "./meals/meals-overview";
import MealDetailScreen from "./meals/meal-detail";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen name="categories" options={{ title: "All Categories" }} component={CategoryScreen} />
        <Stack.Screen name="meals-overview" options={{ title: "Meals" }} component={MealsOverviewScreen} />
        <Stack.Screen name="meal-detail" options={{ title: "Meal Detail" }} component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
