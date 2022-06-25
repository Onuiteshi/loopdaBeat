import { ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";



function Background(props){
    return (
        <View style={[styles.backgroundContainer ]}>
            <ImageBackground source = {props.image} style = {styles.backgroundStyle} resizeMode = "cover" >
                <LinearGradient
                    colors={[...props.gradients]}
                    style={[styles.gradient,props.style]}
                >
                    {props.children}
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}


export default Background