import {View, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomItem from '../CustomItem';

function CustomItems(props){
    const {items} = props
    return (
        <View style={{width:'80%'}}>
            {items.map((item, key) =>  <CustomItem text={item.text} key={key}/>)}

        </View>
    )
}


export default CustomItems