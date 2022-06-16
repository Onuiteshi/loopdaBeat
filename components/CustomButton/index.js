import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ text, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[{ fontFamily: "Medium", color: "#fff" }, textStyle || {}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: 10,
  },
});
