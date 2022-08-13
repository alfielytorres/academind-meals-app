import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favourites";
import IconButton from "../components/IconButton";
import React, { Component } from "react";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  mealId = route.params.id;
  
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const dispatch = useDispatch();

  function changeFavoriteStatusHandler() {
    if (!mealIsFavorite) {
        dispatch(addFavorite({ id: mealId }));
     

    } else {
        dispatch(removeFavorite({ id: mealId }));
    }
    
    
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="black"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return <Text>This is the meal detail screen</Text>;
}

export default MealDetailScreen;
