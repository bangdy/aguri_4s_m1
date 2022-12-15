import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import StackNavHome from "./StackNavHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

const Tab = createBottomTabNavigator();

export default function TabNav(props) {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
        headerShown: false,
        swipeEnabled: false,
      }}
      initialRouteName="Home"
      swipeEnabled={false}
      detachInactiveScreen={false}>
      <Tab.Screen
        name="Home"
        component={StackNavHome}
        options={{
          tabBarIcon: (props) => <Ionicons name="home" size={24} color="black" />,
        }}
      />

      <Tab.Screen
        name="Graph"
        component={StackNavHome}
        options={{
          tabBarIcon: (props) => <Ionicons name="bar-chart" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="User"
        component={StackNavHome}
        options={{
          tabBarIcon: (props) => <Ionicons name="people" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
