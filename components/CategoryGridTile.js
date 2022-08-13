import { Pressable, View, Text, StyleSheet } from "react-native";
import React, {Component} from 'react';
function CategoryGridTile({ title, color, onPress}) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
      android_ripple={{color: '#ccc'}}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
          {backgroundColor: color}
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  title: {
    fontWeight: "bold",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
