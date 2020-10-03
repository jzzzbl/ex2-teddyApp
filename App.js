import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import DragGesture from "./screens/Home";
import UserInfo from "./screens/UserInfo";

const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "#9F8189",
        inactiveTintColor: "gray",
      }}
    >
      <RootTab.Screen
        name="Home"
        component={DragGesture}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "#9F8189" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: "User Info",
          tabBarIcon: ({ focused }) => (
            <AntDesign name="user" size={24} color={focused ? "#9F8189" : "gray"} />
          ),
        }}
      />
      
    </RootTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
}