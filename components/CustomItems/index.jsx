import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomItem from "../CustomItem";
import { ScrollView } from "react-native-gesture-handler";

function CustomItems(props) {
  const { items } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ width: "80%" }}>
      {items.map((item, key) => (
        <CustomItem text={item.text} key={key} />
      ))}
    </ScrollView>
  );
}

export default CustomItems;
