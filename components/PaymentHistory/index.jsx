import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./style";

function PaymentHistory(props) {
  return (
    <View style={styles.paymentHistoryStyle} >
        <View style={{ borderBottomColor: "rgba(196,196,196,0.5)",
        borderBottomWidth: 1, marginBottom:10, paddingVertical:15 }}>

      <Text style={{ color: "white", fontSize: 14}}>Payment History</Text>
        </View>
        
      {props.payments.map((payment, key) => (
        <Payment {...payment} key={key} />
      ))}
    </View>
  );
}

function Payment(props) {
  return (
    <View style={styles.paymentStyle}>
      <Text style={{ color: "white", fontSize: 14 }}>{props.date}</Text>
      <Text style={{ color: "white", fontSize: 14 }}>{props.status}</Text>
      <Text style={{ color: "white", fontSize: 14 }}>
        {`${props.card.type}-*${props.card.lastFour}`}
      </Text>
      <Text style={{ color: "white", fontSize: 14 }}>${props.amount}</Text>
      <Ionicons
        name="play"
        ios="iso-play"
        andriod="md-play"
        size={14}
        color={"white"}
      />
    </View>
  );
}

export default PaymentHistory;
