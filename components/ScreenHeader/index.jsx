import {View, Image, Text} from 'react-native'
import { styles } from './style';


function ScreenHeader(props){


    return (
        <View style={[styles.SHcontainer, {height: props.height}]}>
            <View>
                <Image style= {props.imageStyle} source={props.image}/>
            </View>
            {
                props.headerText && <View><Text style= {props.textStyle}> {props.headerText} </Text></View>
            }
        </View>
    )
}

export default ScreenHeader;