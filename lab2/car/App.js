import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import CarDetails from "./screens/CarDetails";
import News from "./screens/News";
import Contact from "./screens/Contact";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "./constants/colors";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const HomeNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Cars">
        <Stack.Screen
          name="Cars"
          component={Home}
          options={{ ...defaultStyling, ...{ title: "Cars" } }}
        />
        <Stack.Screen name="CarDetails"
          component={CarDetails}
          options={{
            ...defaultStyling,
            ...{
              title: "Car Details",
              h
            }
          }}
        />
      </Stack.Navigator>
    );
  };

  const NewsNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="NewsScreen">
        <Stack.Screen
          name="NewsScreen"
          component={News}
          options={{ ...defaultStyling, ...{ title: "News" } }}
        />
      </Stack.Navigator>
    );
  };

  const defaultStyling = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen name="News" component={NewsNavigator}
          options={{
            tabBarLabel: "News",
            tabBarIcon: ({ color }) => (
              <Ionicons name="bookmark" color={color} size={20} />
            ),
          }} />
        <Tab.Screen name="Contact" component={Contact}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color }) => (
              <Ionicons name="call" color={color} size={20} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
