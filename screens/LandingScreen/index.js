import { View, Text, Pressable, useWindowDimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Background from "../../components/BackGround";
import ScreenHeader from "../../components/ScreenHeader";
import Navigation from "../../components/Navigation";
import { Slider } from "@miblanchard/react-native-slider";
import { useState } from "react";
import { assets } from "../../assets";
import CircleSlider from "./CircleSlider";

function Landing(props) {
  const duration = props.duration ?? 200;
  const maxBPM = 100;
  const { height } = useWindowDimensions();
  const [bpm, setBpm] = useState(0);
  const [value, setValue] = useState(0);
  const [angle, setAngle] = useState(0);
  const onAddPress = () => {
    const newBpm = bpm + 5;
    setBpm(Math.min(newBpm, maxBPM));
    setAngle((bpm / maxBPM) * 180);
  };
  const onSubPress = () => {
    let newBpm = bpm - 5;
    setBpm(Math.max(0, newBpm));
    setAngle((bpm / maxBPM) * 180);
  };
  return (
    <Background
      style={{ justifyContent: "flex-start" }}
      image={assets.splashBackground}
      gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
    >
      <ScreenHeader
        imageStyle={{ width: 138, height: 112 }}
        image={assets.logoSmall}
        headerText={`LOOP`}
        textStyle={{ color: "red", fontSize: 35, fontFamily: "Bold" }}
        height={height * 0.2}
      />

      <Navigation />
      <View style={{ marginTop: 50 }}>
        <CircleSlider
          max={180}
          angle={angle}
          btnRadius={20}
          meterColor={"#B402F5"}
          strokeColor={"rgba(211,91,255,0.38)"}
          textColor={"#B402F5"}
          strokeWidth={30}
          dialWidth={30}
          setAngle={setAngle}
          textSize={1}
        />
      </View>
      <View style={{ width: "80%", alignItems: "center" }}>
        <Text style={{ color: "white", bottom: 50, fontSize: 50 }}>TAP</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
            alignItems: "center",
            bottom: 50,
          }}
        >
          <Pressable style={{ backgroundColor: "red" }} onPress={onSubPress}>
            <Ionicons
              name="remove"
              ios="ios-remove"
              andriod="md-remove"
              color={"white"}
              size={30}
            />
          </Pressable>
          <View style={{ flex: 1, height: 1, backgroundColor: "red" }} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "white",
                width: 50,
                height: 30,
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Text style={{ fontSize: 20 }}>
                {Math.floor((angle / 180) * maxBPM)}
              </Text>
            </View>
            <Text style={{ color: "white" }}>BPM</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "red" }} />
          <Pressable style={{ backgroundColor: "red" }} onPress={onAddPress}>
            <Ionicons
              name="add"
              ios="ios-add"
              andriod="md-add"
              color={"white"}
              size={30}
            />
          </Pressable>
        </View>
      </View>
      <View style={{ width: "70%", justifyContent: "center" }}>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <View style={{ bottom: 4 }}>
            <Ionicons
              name="volume-high"
              ios="ios-volume-high"
              andriod="md-volume-high"
              color={"white"}
            />
          </View>
          <View style={{ width: "80%", marginLeft: 5 }}>
            <Slider
              value={value}
              minimumTrackTintColor="white"
              thumbTintColor="white"
              onValueChange={(value) => setValue(value)}
              trackStyle={{
                height: 2,
              }}
              thumbStyle={{
                color: "white",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                bottom: 10,
              }}
            >
              <Text style={{ color: "white" }}>
                {Math.floor((value * duration) / 60)}:
                {`${(value * duration) % 60 > 10 ? "" : "0"}${
                  Math.floor(value * duration) % 60
                }`}
              </Text>
              <Text style={{ color: "white" }}>
                {Math.floor(duration / 60)}:{duration % 60}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",

          paddingHorizontal: 10,
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="arrow-back-circle"
            ios="ios-arrow-back-circle"
            andriod="md-arrow-back-circle"
            color={"white"}
            size={24}
          />
        </Pressable>
        <Pressable
          style={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="play-back-sharp"
            ios="ios-play-back-sharp"
            andriod="md-play-back-sharp"
            color={"white"}
            size={24}
          />
        </Pressable>
        <Pressable
          style={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="play"
            ios="ios-play"
            andriod="md-play"
            color={"white"}
            size={15}
          />
        </Pressable>
        <Pressable
          style={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="play-forward-sharp"
            ios="ios-play-forward-sharp"
            andriod="md-play-forward-sharp"
            color={"white"}
            size={24}
          />
        </Pressable>
        <Pressable
          style={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="shuffle"
            ios="ios-shuffle"
            andriod="md-shuffle"
            color={"white"}
            size={24}
          />
        </Pressable>
      </View>
    </Background>
  );
}

export default Landing;
