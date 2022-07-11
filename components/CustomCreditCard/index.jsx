import { View, Text, Pressable, Image } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { assets } from "../../assets";
import { styles } from "./style";

function CardDetails(props) {
  return (
    <View style={styles.cardDetailsContainer}>
      <Text style={{ color: "white", fontSize: 14 }}>Card On File</Text>
      <View style={styles.carList}>
        {props.cards.map((card, key) => (
          <Card {...card} key={key} />
        ))}
      </View>
    </View>
  );
}

function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <Image source={assets[props.type]} />
      <Text style={{color:'white'}}>{props.lastFour}</Text>
      <Pressable style={styles.cardEditTextContainer}>
        <Text style={styles.cardEditText}>Edit</Text>
      </Pressable>
      <Pressable>
        <Ionicons
          name="trash"
          ios="ios-trash"
          andriod="md-trash"
          size={17}
          color={"white"}
        />
      </Pressable>
    </View>
  );
}

export default CardDetails;
