import { useContext } from "react";
import { FavoritesContext } from "../providers/favorites/favorites_context";

export const useFavorites = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
