import {View, Pressable, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';



function SearchCategory(props){
    return (

        <View style={{marginBottom:20, marginHorizontal:20}}>
        <Pressable style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
       
            <View style={{flexDirection:'row', width:'30%', alignItems:'center', justifyContent:'space-around'}}>
                <Ionicons ios="ios-musical-notes" andriod="md-musical-notes" name="musical-notes" color={'white'} size={20}/>
                <Text style={{color:'white', fontSize:24}}>
                    {props.text}
                </Text>

            </View>
            <View>
                <Ionicons ios="ios-chevron-forward" andriod="md-chevron-forward" name="chevron-forward" color={'white'} size={20}/>
            </View>
        </Pressable>
    </View>
        )
}


export default SearchCategory;