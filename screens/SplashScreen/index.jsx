// components
import {View, Pressable, Image, ImageBackground, Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Background from '../../components/BackGround'
// styles
import { styles } from './style'

// assets
import { assets } from '../../assets';

function SplashScreen(props){
    return (
        <Background image={assets.splashBackground} gradients = {['rgba(103,27,88,.8)', 'transparent']}>
                    <Image style={styles.logoStyle} source={assets.logoLarge}/>
                    <Pressable style={styles.buttonStyle}>
                        <Text style={styles.textStyle}>Login</Text>
                    </Pressable>
        </Background>
        
           

    )
}

export default SplashScreen;
