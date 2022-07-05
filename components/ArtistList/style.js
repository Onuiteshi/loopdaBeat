import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  divider: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: "95%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between"
    
  },

  sizeControl: {
    flex: 1,
    textAlign: "center",
    minWidth: "100%",
    alignSelf: "center",
    justifySelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  textControl: {
    color: "white",
    fontSize: 24,
    // marginLeft: 10,
  },

  icon:{
    // alignSelf:"center",
    // justifySelf:"center",
    fontSize:24,
    position:"relative",
    top:4,
  },
});
