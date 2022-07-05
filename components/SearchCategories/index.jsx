import {View, Pressable} from 'react-native'
import SearchCategory from '../SearchCategory';
import Ionicons from '@expo/vector-icons/Ionicons';


function SearchCategorys(props){
    const categories = [{text:'Playlist', andriodIcon:'', iosIcon:'', onPress:()=>{}}, {text:'Artist', andriodIcon:'', iosIcon:'', onPress:()=>{}}, {text:'Genre', andriodIcon:'', iosIcon:'', onPress:()=>{}}, {text:'Songs', andriodIcon:'', iosIcon:'', onPress:()=>{}}]
    return (
        
        <View style={{justifyContent:'flex-start', width:'100%' }}>
            {categories.map(({text, andriodIcon, iosIcon, onPress }, key) =>
            
            <SearchCategory {...props} text={text} andriodIcon={andriodIcon} iosIcon={iosIcon} onPress={onPress} key={key} />
            
            )}
        
        </View>
        )
}


export default SearchCategorys;