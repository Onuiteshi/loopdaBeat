import Account from "../screens/Account";
import Tabs from "./TabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Draw = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
};

export default Draw;
