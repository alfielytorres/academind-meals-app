import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();


    function selectMealHandler(){
        navigation.navigate('MealDetail', {
            id: id
        })
    }
   
    return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: { 
    margin: 4, 
    justifyContent: "center", 
    alignItems: "center" 
},
  detailItem: {
    marginHorizontal: 8,
  },
  gridItem: {
    flex: 1,
    margin: 16,
    overflow: "hidden",
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
    margin: 8, 
    fontSize: 16
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});
