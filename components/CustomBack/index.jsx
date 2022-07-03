import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


function CustomBack(props){
    return (
        <View style={{flexDirection:'row', width:'80%', marginTop:5, alignItems:'center'}}>
            <Ionicons ios="ios-chevron-back" andriod="md-chevron-back" name="chevron-back" color={'white'} size={20}/>
            <Text style={{color:'white', fontSize:18}}>Back to {props.prev}</Text>
        </View>
    )
}

export default CustomBack