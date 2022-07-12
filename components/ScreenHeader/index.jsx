import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

function ScreenHeader(props) {
  return (
    <View style={[styles.SHcontainer, { height: props.height }]}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        >
          <View>
            <Feather name="menu" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <View style={{ marginLeft: 80 }}>
          <Image style={props.imageStyle} source={props.image} />
          {props.headerText && (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text
                style={[
                  props.textStyle,
                  { width: "100%", textAlign: "center" },
                ]}
              >
                {" "}
                {props.headerText}{" "}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default ScreenHeader;
