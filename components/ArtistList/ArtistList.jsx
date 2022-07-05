import { View, Text } from "react-native";
import Background from "../BackGround";
import { assets } from "../../assets";
import { styles } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';

function ArtistList() {
  return (
    <Background
      style={{ justifyContent: "flex-start", padding: 40 }}
      image={assets.splashBackground}
      gradients={["rgba(103,27,88,.8)", "transparent"]}
    >
      <View style={styles.sizeControl}>
        <View style={styles.divider}>
          <Text style={styles.textControl}> Nathaniel Bassey  </Text>
          <Ionicons style={styles.icon} ios="ios-chevron-forward" android="md-chevron-forward" name="chevron-forward" color="white" size="large"/>
        </View>

        <View style={styles.divider}>
          <Text> Nathaniel Bassey </Text>
        </View>

        <View style={styles.divider}>
          <Text> Nathaniel Bassey </Text>
        </View>
      </View>
    </Background>
  );
}

export default ArtistList;