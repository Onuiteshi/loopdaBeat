import {
  TextInput,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { assets } from "../../../assets";
import Navigation from "../../../components/Navigation";
import SearchCategorys from "../../../components/SearchCategories";
import Background from "../../../components/BackGround";
import ScreenHeader from "../../../components/ScreenHeader";
import SearchInput from "../../../components/SearchInput";
import MyTabs from "../../../components/Tab";
function SearchByCategory() {
  const { height } = useWindowDimensions();
  return (
    <Background
    style={{ justifyContent: "flex-start"}}
    image={assets.splashBackground}
    gradients={["rgba(103,27,88,.8)", "transparent"]}
  >
     <ScreenHeader
        imageStyle={{ width: 138, height: 112 }}
        image={assets.logoSmall}
        headerText="SEARCH CATEGORY"
        textStyle={{color:'red', fontSize:35, fontFamily: "Bold", }}
        height={height*0.2}
      />
     
      <Navigation />
      <SearchInput />


      <SearchCategorys />
    </Background>
  );
}

export default SearchByCategory;
