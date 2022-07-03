import {View, Image, Text} from 'react-native'
import { styles } from './style';


function ScreenHeader(props){


    return (
        <View style={[styles.SHcontainer, {height: props.height}]}>
            <View>
                <Image style= {props.imageStyle} source={props.image}/>
            </View>
            {
                props.headerText && <View style={{width:'100%', alignItems:'center'}}><Text style= {[props.textStyle, {width:'100%', textAlign:'center'}]}> {props.headerText} </Text></View>
            }
        </View>
    )
}

export default ScreenHeader;