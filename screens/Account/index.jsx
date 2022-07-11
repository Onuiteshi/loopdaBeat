import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  useWindowDimensions,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ScreenHeader from "../../components/ScreenHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import Background from "../../components/BackGround";
import CardDetails from "../../components/CustomCreditCard";
import { assets } from "../../assets";
import PaymentHistory from "../../components/PaymentHistory";
import PaymentModal from "../../components/PaymentsModal";
import Modal from "react-native-modal";

function BillingInfo(props) {
  const cards = props.cards ?? [
    { type: "visa", lastFour: 8907 },
    { type: "master", lastFour: 8907 },
  ];

  const payments = [
    {
      date: "1/02/2022",
      status: "paid",
      card: { type: "master", lastFour: 8907 },
      amount: 10,
    },
    {
      date: "1/02/2022",
      status: "paid",
      card: { type: "master", lastFour: 8907 },
      amount: 10,
    },
    {
      date: "1/02/2022",
      status: "paid",
      card: { type: "master", lastFour: 8907 },
      amount: 10,
    },
  ];
  const [showBilling, setShowBilling] = useState(false);
  const OnHeaderPress = () => {
    setShowBilling(!showBilling);
  };
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Pressable style={styles.dropDowstyle} onPress={OnHeaderPress}>
        <View>
          <Text>Billing Info</Text>
        </View>
        <View>
          <Ionicons
            name={showBilling ? "remove" : "add"}
            ios={`ios-${showBilling ? "remove" : "add"}`}
            andriod={`md-${showBilling ? "remove" : "add"}`}
            size={17}
          />
        </View>
      </Pressable>
      {!showBilling ? (
        <></>
      ) : (
        <View style={{ width: "100%" }}>
          <CardDetails cards={cards}></CardDetails>
          <Pressable
            style={styles.addPaymentButton}
            onPress={props.setShowPaymentModal}
          >
            <Text style={{ fontSize: 12 }}>+ Add Payment Method</Text>
          </Pressable>
          <PaymentHistory payments={payments} />
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <LinearGradient
              colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.bottonGradient}
            >
              <Pressable style={styles.buttonStyle}>
                <Text style={{ fontSize: 14, color: "white" }}>Save</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      )}
    </View>
  );
}

function PersonalProfile(props) {
  const [showPersonal, setShowPersonal] = useState(false);
  const OnHeaderPress = () => {
    setShowPersonal(!showPersonal);
  };

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Pressable style={styles.dropDowstyle} onPress={OnHeaderPress}>
        <View>
          <Text>Personal Profile</Text>
        </View>
        <View>
          <Ionicons
            name={showPersonal ? "remove" : "add"}
            ios={`ios-${showPersonal ? "remove" : "add"}`}
            andriod={`md-${showPersonal ? "remove" : "add"}`}
            size={17}
          />
        </View>
      </Pressable>
      {!showPersonal ? (
        <></>
      ) : (
        <View style={styles.ProfileContainer}>
          <View>
            <Image source={assets.ProfilePicture} style={styles.profileImage} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                height: 22,
                borderRadius: 50,
                bottom: 12,
              }}
            >
              <Ionicons
                name="images"
                ios="ios-images"
                andriod="md-images"
                size={14}
                color={"white"}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Change</Text>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Name</Text>
            <LinearGradient
              colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.inputGradient}
            >
              <TextInput style={styles.input} />
            </LinearGradient>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Email</Text>
            <LinearGradient
              colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.inputGradient}
            >
              <TextInput style={styles.input} />
            </LinearGradient>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Phone</Text>
            <LinearGradient
              colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.inputGradient}
            >
              <TextInput style={styles.input} />
            </LinearGradient>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Password</Text>
            <LinearGradient
              colors={["rgba(32,197,149,1)", "rgba(32,197,149,0)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.inputGradient}
            >
              <TextInput style={styles.input} />
            </LinearGradient>
          </View>
        </View>
      )}
    </View>
  );
}

function Account(props) {
  const { height } = useWindowDimensions();
  const [showBilling, setShowBilling] = useState(false);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <Background
      style={{ justifyContent: "flex-start" }}
      image={assets.splashBackground}
      gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
    >
      <ScreenHeader
        imageStyle={{ width: 138, height: 112 }}
        image={assets.logoSmall}
        headerText="MY ACCOUNT"
        textStyle={{
          color: "white",
          fontSize: 25,
          backgroundColor: "red",
          padding: 10,
          fontFamily: "Bold",
        }}
        height={height * 0.22}
      />

      <Modal
        isVisible={showPaymentModal}
        style={{ alignItems: "center" }}
        onRequestClose={() => {
          setShowPaymentModal(false);
        }}
      >
        <PaymentModal setShowPaymentModal={setShowPaymentModal} />
      </Modal>
      <View style={styles.section}>
        <PersonalProfile />
      </View>
      <View style={styles.section}>
        <BillingInfo setShowPaymentModal={setShowPaymentModal} />
      </View>

      {/* <BillingInfo /> */}
    </Background>
  );
}

export default Account;
