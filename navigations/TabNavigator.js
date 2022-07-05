import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import Bg from "./assets/bg1.png";
// import SearchByCategory from "./screens/Search/ByCategory";
import SearchByArtist from "../screens/Search/ByArtist";
import SearchBySongs from "../screens/Search/ArtistSongs";
import ImportLoop from "../screens/ImportLoop";
import LoopList from "../screens/LoopList";

// import { assets } from "./assets";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "lightgray",
        activeBackgroundColor: "#24294c",
        inactiveBackgroundColor: "#24294c",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#24294c",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={ImportLoop}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              ios="ios-home"
              andriod="md-home"
              name="home"
              color={"#20c595"}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={LoopList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              ios="ios-aperture"
              andriod="md-aperture"
              name="aperture"
              color={"#20c595"}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Songs"
        component={SearchBySongs}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={"#20c595"} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SearchByArtist}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="tune-variant"
              color={"#20c595"}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
