import {View, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

function CustomItem(props){
    return (
        <View style={{borderBottomColor:'rgba(255,255,255,0.5)', borderBottomWidth: 1, paddingVertical:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{fontSize:24, color:'white'}}>
                {props.text}
            </Text>
            <Ionicons ios="ios-chevron-forward" andriod="md-chevron-forward" name="chevron-forward" color={'white'} size={20}/>
        </View>
    )
}

export default CustomItem;