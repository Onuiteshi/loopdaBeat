import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
    width: "100%",
  },
  cardEditTextContainer: {
    marginLeft: 10,
  },
  cardEditText: {
    color: "white",
    fontSize: 16,
  },
  cardDetailsContainer: {
    alignItems: "flex-start",
    marginTop:10
  },
  carList: {
    padding: 20,
    borderBottomColor: "rgba(196,196,196,0.5)",
    paddingBottom: 5,
    borderBottomWidth: 1,
    width: "100%",
  },
});
