import { View, TextInput, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from "react";
import { assets } from "../../assets";


function SearchInput(props){
    const searchRef = useRef('')
    return(
        <View style={{width:'80%',flexDirection:'row', alignItems:'center'}}>
            <TextInput ref={searchRef} style={{
        paddingVertical:10,
        paddingHorizontal:5,
        marginVertical:30,
        fontSize:14,
        width:'80%',
        backgroundColor:'white',
        borderRadius:10,
        lineHeight:17,
        color:'black'
      
    }}></TextInput>
         <Ionicons ios="ios-musical-notes" andriod="md-musical-notes" name="musical-notes" color={'white'} size={20}/>
        </View>
    )
}

export default SearchInput