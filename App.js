import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Barlow_400Regular,
  Barlow_400Regular_Italic,
  Barlow_500Medium,
  Barlow_500Medium_Italic,
  Barlow_600SemiBold,
  Barlow_600SemiBold_Italic,
  Barlow_700Bold,
  Barlow_700Bold_Italic,
} from "@expo-google-fonts/barlow";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/SignUp";
import Bg from "./assets/bg1.png";

export default function App() {
  let [fontLoaded] = useFonts({
    Medium: Barlow_500Medium,
    Regular: Barlow_400Regular,
    SemiBold: Barlow_600SemiBold,
    Bold: Barlow_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <SignUp />
        
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(39, 44, 82, 0.7)",
  },
  bg: {
    width: "100%",
    height: "100%",

    // backgroundColor: "#272C52",
  },
});
