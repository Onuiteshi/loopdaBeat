import { View, Pressable, TextInput, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../../components/BackGround";
import ScreenHeader from "../../components/ScreenHeader";

import { assets } from "../../assets";

// hooks
import { useRef } from "react";

import { styles } from "./style";

function SignUp(props) {
  nameRef = useRef("");
  emailRef = useRef("");
  usernameRef = useRef("");
  passwordRef = useRef("");
  rePasswordRef = useRef("");

  return (
    <Background
      style={{ justifyContent: "flex-start", padding: 40 }}
      image={assets.splashBackground}
      gradients={["rgba(103,27,88,.8)", "transparent"]}
    >
      <ScreenHeader
        imageStyle={{ width: 138, height: 112 }}
        image={assets.logoSmall}
        headerText="REGISTRATION"
        textStyle={styles.largeText}
        height={195}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.label}>Name</Text>
        <LinearGradient
          colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.inputGradient}
        >
          <TextInput style={styles.input} ref={nameRef} />
        </LinearGradient>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Email</Text>
        <LinearGradient
          colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.inputGradient}
        >
          <TextInput style={styles.input} ref={emailRef} />
        </LinearGradient>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Username</Text>
        <LinearGradient
          colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.inputGradient}
        >
          <TextInput style={styles.input} ref={usernameRef} />
        </LinearGradient>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Password</Text>
        <LinearGradient
          colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.inputGradient}
        >
          <TextInput style={styles.input} ref={passwordRef} />
        </LinearGradient>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Retype Password</Text>
        <LinearGradient
          colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.inputGradient}
        >
          <TextInput style={styles.input} ref={rePasswordRef} />
        </LinearGradient>
      </View>
      <View style={{flexDirection:'row'}}>
        <View>
          <LinearGradient
            colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.bottonGradient}
          >
            <Pressable style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Register</Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View>
          <Pressable style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
}

export default SignUp;
