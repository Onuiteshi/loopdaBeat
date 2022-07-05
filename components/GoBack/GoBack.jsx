import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import {styles} from "./style"
import Ionicons from '@expo/vector-icons/Ionicons';


function GoBack (){
    return (
        <View>
            <Ionicons name="arrow-back-sharp" color="white"/>
            <Text>{clickProps.children} </Text>
        </View>
    )
}