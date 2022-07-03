import {
    TextInput,
    Text,
    View,
    Image,
    useWindowDimensions,
  } from "react-native";
  import { assets } from "../../../assets";
  import Navigation from "../../../components/Navigation";
  import CustomItems from "../../../components/CustomItems";
  import Background from "../../../components/BackGround";
  import ScreenHeader from "../../../components/ScreenHeader";
  import SearchInput from "../../../components/SearchInput";
  import CustomBack from "../../../components/CustomBack";
  function SearchByArtist(props) {
    const artist = props.artist ?? [
        {text:'Asake'},
        {text:'Asake'},
        {text:'Asake'},
        {text:'Asake'},
        {text:'Asake'},
    ]
    
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
          headerText="SEARCH ARTIST"
          textStyle={{color:'red', fontSize:35}}
          height={height*0.2}
        />
       
        <Navigation />
        <CustomBack prev='Search Category'/>
        <SearchInput />
  
  
        <CustomItems items={artist} />
      </Background>
    );
  }
  
  export default SearchByArtist;
  