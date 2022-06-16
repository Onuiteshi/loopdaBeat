import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({ value, placeholder, setValue, security }) => {
  return (
    <View style={{ width: "100%", marginVertical: 5 }}>
      <Text
        style={{ color: "rgba(255, 255, 255, 0.6)", fontFamily: "Regular" }}
      >
        {placeholder}
      </Text>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={security}
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#20C595",
    backgroundColor: "#272C52",
  },
  input: {
    color: "#fff",
  },
});
