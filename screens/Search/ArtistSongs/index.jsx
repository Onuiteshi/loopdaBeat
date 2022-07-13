import {
  TextInput,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { assets } from "../../../assets";
import Navigation from "../../../components/Navigation";
import CustomItems from "../../../components/CustomItems";
import Background from "../../../components/BackGround";
import ScreenHeader from "../../../components/ScreenHeader";
import SearchInput from "../../../components/SearchInput";
import CustomBack from "../../../components/CustomBack";
function SearchBySongs(props) {
  const name = props.name ?? "Asake";
  const songs = props.songs ?? [
    { text: "Sungba" },
    { text: "Omo Ope" },
    { text: "Sungba" },
  ];

  const { height } = useWindowDimensions();
  return (
    <Background
      style={{ justifyContent: "flex-start" }}
      image={assets.splashBackground}
      gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
    >
      <ScreenHeader
        imageStyle={{ width: 138, height: 112 }}
        image={assets.logoSmall}
        headerText={`${name.toUpperCase()} SONGS`}
        textStyle={{ color: "red", fontSize: 35, fontFamily: "Bold" }}
        height={height * 0.2}
      />

      <Navigation />
      <TouchableOpacity
        style={{ width: 300 }}
        onPress={() => props.navigation.navigate("SearchByArtist")}
      >
        <CustomBack prev="Search Artist" />
      </TouchableOpacity>

      <SearchInput />

      <CustomItems items={songs} />
    </Background>
  );
}

export default SearchBySongs;
