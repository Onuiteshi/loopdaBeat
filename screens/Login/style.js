import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    textWrapper:{
        // flex:1,
        justifyContent:'flex-start',
        width:314,
        marginBottom:20
    },
    largeText:{
        color:'white',
        fontSize:35,
    },
    label:{
        fontSize:14,
        color:'white',
        marginBottom:2,
        opacity:0.6
    },
    inputGradient:{
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input:{
        
        color:'white',
        padding:16,
        marginVertical:1,
        fontSize:14,
        width:'99%',
        backgroundColor:'#272C52',
        borderRadius:8,
        lineHeight:17
      
    },
    buttonContainer: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: "row",
        borderColor: '#ddd',
        position: 'relative'
    },
    bottonGradient:{

        borderRadius:8,
        
    },
    buttonStyle:{

        width:150,
        height:50,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"

    },
    textStyle:{
        
        fontSize:15,
        color:'white',
    }


})