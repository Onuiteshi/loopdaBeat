import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageStyle:{
        marginRight:2,
        marginVertical:20,
        width:36,
        height:24
    },
    inputStyles:{
        width:'100%',
        height:40,
        borderColor:'rgba(36,36,53,.6',
        borderWidth:1,
        marginBottom:10,
        paddingLeft:20,
        color:'black'
    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:'flex-start'
      },
      checkbox: {
        alignSelf: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#20C595",
        marginRight:10
      },
      label:{
        fontSize:16
      },
      buttonContainer:{
        alignItems:"center"
      },
      buttonGradient:{
        width:'50%',
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        marginVertical:20
      }

})