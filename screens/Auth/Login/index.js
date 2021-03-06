import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/logo2.png";
import CustomInput from "../../../components/CustomInput";
import Checkbox from "expo-checkbox";
import CustomButton from "../../../components/CustomButton";
import { assets } from "../../../assets";
import Background from "../../../components/BackGround";
const Login = (props) => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const onSignInPress = () => {
    // props.setIsLoggedIn(true);
    props.navigation.navigate("Draw");
  };
  const onSignUpPress = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <Background
      style={{ justifyContent: "flex-start", padding: 40 }}
      image={assets.splashBackground}
      gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logoSmall}
          style={[styles.logo, { height: height * 0.15 }]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>LOGIN</Text>
      </View>

      <View>
        <CustomButton />
        <CustomButton />
      </View>

      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder={"Username"}
      />
      <CustomInput
        value={password}
        security={true}
        setValue={setPassword}
        placeholder={"Password"}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember me</Text>
        </View>
        <CustomButton
          style={{
            alignItems: "center",
            backgroundColor: "#20C595",
            borderRadius: 50,
            marginLeft: 20,
          }}
          text="Login"
          onPress={onSignInPress}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomButton
          textStyle={{ color: "rgba(255, 255, 255, 0.6)", fontSize: 14 }}
          text="Forgot Password?"
        />
        <CustomButton
          textStyle={{ color: "rgba(255, 255, 255, 0.6)", fontSize: 14 }}
          text="Create Account"
          onPress={onSignUpPress}
        />
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

  loginHeader: {
    fontFamily: "Regular",
    fontSize: 35,
    color: "#fff",
  },
  headerText: {
    fontFamily: "Regular",
    fontSize: 35,
    color: "#fff",
  },
  loginContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  headerContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#20C595",
  },
  label: {
    margin: 8,
    fontFamily: "Regular",
    color: "rgba(255, 255, 255, 0.6)",
  },
});
