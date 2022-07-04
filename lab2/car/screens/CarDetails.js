import React, { useState, useEffect } from "react";
import {StyleSheet,View,ScrollView,Text,Dimensions,Image,Pressable,} from "react-native";
import colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home({ navigation, route }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { car } = route.params;

  useEffect(() => {
    console.log("fav  : " + isFavorite);
  }, [isFavorite]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          onPress={() => {
            setIsFavorite((isFavorite) => !isFavorite);
          }}
        >
          <View
            style={{
              ...styles.favourite,
              ...{ backgroundColor: isFavorite ? colors.primary : "#ccc" },
            }}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-dislike"}
              color={"#fff"}
              size={26}
            />
          </View>
        </Pressable>
        <Image source={{ uri: car.image }} style={styles.image} />
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.description}>{car.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollWrapper: {
    marginBottom: 15,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 180,
    resizeMode: "contain",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 15,
  },
  description: {
    fontSize: 20,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  favourite: {
    margin: 10,
    backgroundColor: "#ccc",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
