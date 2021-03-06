import { View, useWindowDimensions } from "react-native";

import Background from "../../components/BackGround";
import ScreenHeader from "../../components/ScreenHeader";
import { assets } from "../../assets";

function LoopList() {
  const { height } = useWindowDimensions();
  return (
    <Background
      style={{ justifyContent: "flex-start" }}
      image={assets.splashBackground}
      gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
    >
      <ScreenHeader
        imageStyle={{ width: 120, height: 100 }}
        image={assets.logoSmall}
        headerText="LOOP LIST"
        textStyle={{
          color: "white",
          fontSize: 25,
          backgroundColor: "red",
          padding: 10,
          margin: "auto",
          fontFamily: "Bold",
        }}
        height={height * 0.22}
      />
      {/* <SongItems /> */}
    </Background>
  );
}
export default LoopList;
