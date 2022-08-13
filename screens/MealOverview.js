import { Text, View, FlatList, SafeAreaView } from "react-native";
import { MEALS } from "../data/dummy-data";
import React, {Component} from 'react';
import MealItem from "../components/MealItem";
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;


  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

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
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        
      />
    </View>
  );
}

export default MealsOverviewScreen;
