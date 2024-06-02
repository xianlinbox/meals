import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./category/categories";
import MealsOverviewScreen from "./meals/meals-overview";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen name="categories" component={CategoryScreen} />
        <Stack.Screen name="meals-overview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
