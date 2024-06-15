import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  mealIds: [],
  addMeal: (id) => {},
  removeMeal: (id) => {},
});

const value = {
  mealIds: [],
  addMeal: (id) => {},
};

export function FavoritessContextWrapper({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavoriteMeal(id) {
    setFavoriteMealIds([...favoriteMealIds, id]);
  }

  function removeFavoriteMeal(id) {
    const newFavoriteMealIds = favoriteMealIds.filter((mealId) => mealId !== id);
    setFavoriteMealIds(newFavoriteMealIds);
  }

  const value = {
    mealIds: favoriteMealIds,
    addMeal: addFavoriteMeal,
    removeMeal: removeFavoriteMeal,
  };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
