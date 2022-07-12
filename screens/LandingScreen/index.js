import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Background from "../../components/BackGround";
import ScreenHeader from "../../components/ScreenHeader";
import Navigation from "../../components/Navigation";
import { Slider } from "@miblanchard/react-native-slider";
import { useState } from "react";
import { assets } from "../../assets";
import CircleSlider from "react-native-circle-slider";

function Landing(props) {
  const duration = props.duration ?? 200;
  const [bpm, setBpm] = useState(0);
  const [value, setValue] = useState(0);
  const [angle, setAngle] = useState(0);

  return (
    <Background
      style={{ justifyContent: "flex-start" }}
      image={assets.splashBackground}
      gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
    >
      <View style={{ marginTop: 50 }}>
        <CircleSlider
          min={270}
          max={180}
          value={270}
          btnRadius={20}
          meterColor={"#B402F5"}
          strokeColor={"rgba(211,91,255,0.38)"}
          textColor={"#B402F5"}
          strokeWidth={30}
          dialWidth={30}
          onValueChange={(value) => setAngle(value)}
          textSize={1}
        />
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
            // borderRadius: "50%",
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
            // borderRadius: "50%",
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
            // borderRadius: "50%",
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
            // borderRadius: "50%",
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
            // borderRadius: "50%",
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
