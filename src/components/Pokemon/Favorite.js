import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isFavoritePokemonApi,
  removeFavoritePokemonApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);

  console.log(isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavoritePokemonApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
    setIsFavorite(true);
  };

  const removeFavorite = async () => {
    await removeFavoritePokemonApi(id);
    setIsFavorite(false);
  };

  return (
    <>
      <Icon
        name="heart"
        color="#fff"
        solid={isFavorite}
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{ marginRight: 20 }}
      />
    </>
  );
}
