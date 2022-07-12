import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./TabNavigator";
import SignUp from "../screens/SignUp";
import Draw from "./DrawerNavigator";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  useEffect(() => {}, []);

  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Login"}
    >
      <MainStack.Screen name="Draw" component={Draw} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={SignUp} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
