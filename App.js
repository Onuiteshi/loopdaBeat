import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
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
import SearchByCategory from "./screens/Search/ByCategory";
import SearchByArtist from "./screens/Search/ByArtist";
import SearchBySongs from "./screens/Search/ArtistSongs";
import ImportLoop from "./screens/ImportLoop";
import LoopList from "./screens/LoopList";
import { assets } from "./assets";

const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#24294c',
            inactiveBackgroundColor: '#24294c',
            headerShown: false,
            tabBarStyle: {
              backgroundColor:'#24294c',
              
            }
          }}
          >
        <Tab.Screen
          name="Feed"
          component={ImportLoop}
          options={{
            tabBarShowLabel:false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons ios="ios-home" andriod="md-home" name="home" color={'#20c595'} size={20}/>
              
              ),
            }}
            />
        <Tab.Screen
          name="Notifications"
          component={Login}
          options={{
            tabBarShowLabel:false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons ios="ios-aperture" andriod="md-aperture" name="aperture" color={'#20c595'} size={20}/>
              ),
            }}
            />
        <Tab.Screen
          name="Songs"
          component={SearchBySongs}
          options={{
            tabBarShowLabel:false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons ios="ios-menu" andriod="md-menu" name="menu" color={'#20c595'} size={20}/>
              ),
            }}
            />
        <Tab.Screen
          name="Profile"
          component={SearchByArtist}
          options={{
            tabBarShowLabel:false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons ios="ios-settings" andriod="md-settings" name="settings" color={'#20c595'} size={20}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
