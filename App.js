import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverview from "./screens/MealOverview";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React, {Component} from 'react';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="FavouritesScreen" component={FavouritesScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealOverview"
              options={({ route, navigation }) => {
                const categoryTitle = route.params.title;
                return {
                  title: categoryTitle,
                };
              }}
              component={MealOverview}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
