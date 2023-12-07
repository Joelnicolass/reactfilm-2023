import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "./favorites_context";
import { AppStorage } from "../../base/app_storage";

const FAVORITE_KEY = "reacfilmFavorites";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const initFavs = async () => {
      const results = await AppStorage.get("reacfilmFavorites");
      if (!results) return;

      setFavorites(results);
    };

    initFavs();
  }, []);

  const addFavorite = (movie) => {
    const newList = [...favorites, movie];
    setFavorites(newList);

    AppStorage.save(FAVORITE_KEY, newList);
  };

  const removeFavorite = (movie) => {
    const newList = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(newList);

    AppStorage.save(FAVORITE_KEY, newList);
  };

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.id === movie.id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
