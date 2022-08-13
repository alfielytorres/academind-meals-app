import { Text, View, FlatList, SafeAreaView } from "react-native";

import React, { Component } from "react";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
function FavouritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealIds.includes(meal.id);
  });

  console.log("favorite screen", favoriteMealIds);
  console.log("favorite screen", favoriteMeals);
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title:item.title, 
      imageUrl:item.imageUrl ,
      duration: item.duration ,
      complexity: item.complexity ,
      affordability: item.affordability,
    }
    return (
      <MealItem 
      {...mealItemProps}
      />
    );
  }
  if (favoriteMeals.length === 0) {
    return (
      <View>
        <Text>Empty</Text>
      </View>
    );
  } 
  return (
    <View>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default FavouritesScreen;
