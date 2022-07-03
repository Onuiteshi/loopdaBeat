import {
  TextInput,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { assets } from "../../assets";
import Navigation from "../../components/Navigation";

function Search() {
  const { height } = useWindowDimensions();
  return (
    <View>
      <Image
        source={assets.Logo}
        style={[ { height: height * 0.15 }]}
        resizeMode="contain"
      />
      <Text > SEARCH CATEGORY</Text>
      <Navigation />

      {/* <View>
        <View>
          <TextInput></TextInput>
        </View>

        <View>
          <Text> Playlist </Text>
        </View>

        <View>
          <Text> Artist </Text>
        </View>

        <View>
          <Text> Genre</Text>
        </View>

        <View>
          <Text> Songs </Text>
        </View>
      </View> */}
    </View>
  );
}

export default Search;
