import { View, Text } from "react-native";
import { styles } from "./style";

function Navigation() {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.nav}> SEARCH</Text>
      <Text style={styles.nav}> IMPORT</Text>
      <Text style={styles.nav}> LIST</Text>
    </View>
  );
}

export default Navigation;
