import { View, Modal, TextInput, Text, Image, Pressable } from "react-native";
import { assets } from "../../assets";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";
import Checkbox from "expo-checkbox";
import { useState } from "react";

function PaymentModal(props) {
  const onPress = () => {
    props.setShowPaymentModal(false);
  };
  const [isSelected, setIsSelected] = useState(false);
  const setSelection = () => {
    setIsSelected(!isSelected);
  };

  const paymentMethods = ["master", "amex", "Discover", "visa"];
  return (
    <View
      style={{ backgroundColor: "white", width: "80%", paddingHorizontal: 10, paddingBottom:20 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>Add Payment Method</Text>
        <Pressable onPress={onPress} style={{ width: 20 }}>
          <Ionicons name="close" ios="ios-close" andriod="md-close" size={20} />
        </Pressable>
      </View>
      <Text style={{ fontSize: 14 }}>Billing Info</Text>
      <View style={{ flexDirection: "row" }}>
        {paymentMethods.map((source, key) => (
          <Image source={assets[source]} style={styles.imageStyle} />
        ))}
      </View>
      <TextInput placeholder="Credit Card Number" style={styles.inputStyles} />
      <View style={styles.inputGroup}>
        <TextInput placeholder="Expiration" style={[styles.inputStyles, { width: "47%" }]} />
        <TextInput placeholder="CVV" style={[styles.inputStyles, { width: "47%" }]} />
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Accept Terms of Use</Text>
      </View>

      <Pressable onPress={onPress} style={styles.buttonContainer}>
        <LinearGradient
          colors={["#FA4542", "rgba(251,4,0,0.39)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[.21,1]}
          style={styles.buttonGradient}
        >
          <Text style={{ color: "white", fontSize:14 }}> Add</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default PaymentModal;
