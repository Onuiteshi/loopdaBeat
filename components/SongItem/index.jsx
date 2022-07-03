import {View,Text} from 'react-native'
import { RadioButton } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';


function SongItem(props){
    return(

        <View>
        <RadioButton/>
        <Text>{props.title}</Text>
        <Text>{props.category}</Text>
        <Ionicons ios="ios-play-outline" andriod="md-play-outline" name="play-outline" color={'white'} size={20}/>
        <Ionicons ios="ios-add-outline" andriod="md-add-outline" name="add-outline" color={'white'} size={20}/>
    </View>
)

}

export default SongItem

