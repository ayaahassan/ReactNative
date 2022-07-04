import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Car from "../components/car";
import empty from "../assets/empty.png";

export default function Home({ navigation }) {
  const [cars, setCars] = useState([
    {
      name: "Car 1",
      model: "Continental",
      brand:'https://thumbs.dreamstime.com/b/taipei-taiwan-oct-d-rendering-bmw-logo-bmw-german-automobile-manufacturer-d-rendering-bmw-logo-bmw-german-automobile-101114266.jpg',
      image:'https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/SONATA-hero-option1-764A5360-edit-640x354-1.jpg',
      description:
        "Here is the description of the Bentley car Here is the description of the Bentley car Here is the description of the Bentley car Here is the description of the Bentley car Here is the description of the Bentley carHere is the description of the Bentley car Here is the description of the Bentley car  Here is the description of the Bentley car Here is the description of the Bentley car",
    },
    {
      name: "Car 2",
      model: "C Class",
      brand:'https://thumbs.dreamstime.com/b/taipei-taiwan-oct-d-rendering-bmw-logo-bmw-german-automobile-manufacturer-d-rendering-bmw-logo-bmw-german-automobile-101114266.jpg',
      image:'https://resources.stuff.co.nz/content/dam/images/1/x/s/0/f/6/image.related.StuffLandscapeThreeByTwo.1464x976.1y0lgi.png/1574883910794.jpg',
      description:
        "Here is the description of the Mercedes car Here is the description of the Mercedes car Here is the description of the Mercedes car Here is the description of the Mercedes car v Here is the description of the Mercedes car Here is the description of the Mercedes car v Here is the description of the Mercedes car v",
    },
    {
      name: "Car 3",
      model: "X Series",
      brand:
        "https://i.pinimg.com/favicons/17fdb577ca9f2965902eff6a66c9d1b626ee4a2ea308b41d5bc4cc80.png?64c5ef3a86f55475045b2c705a70196f",
      image:
        "https://media.hatla2eestatic.com/uploads/ncarmodel/6748/big-up_935dadd71507a84c9ebc6acb259fc7dd.png",
      description:
        "Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car Here is the description of the BMW car  ",
    },
  ]);

  const removeCar = (index) => {
    const tempCars = [...cars];
    tempCars.splice(index, 1);
    setCars(tempCars);
  };

  return (
    <View style={styles.container}>
      {cars.length > 0 ? (
        <ScrollView
          style={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}
        >
          {cars.map((car, index) => {
            return (
              <Car
                car={car}
                key={index}
                navigation={navigation}
                deleteCar={removeCar}
              />
            );
          })}
          <StatusBar style="auto" />
        </ScrollView>
      ) : (
        <View style={styles.emptyWrapper}>
          <Image style={styles.emptyImage} source={empty} />
          <Text style={styles.emptyText}>No cars yet</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollWrapper: {
    marginBottom: 20,
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  emptyImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
    resizeMode: "contain",
  },
  emptyText: {
    fontSize: 20,
  },
});
