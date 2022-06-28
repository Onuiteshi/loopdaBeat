import { View, Pressable, TextInput, Text} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient'
import Background from '../../components/BackGround'
import ScreenHeader from '../../components/ScreenHeader'

import { assets } from '../../assets'

// hooks
import { useRef } from 'react'


import { styles } from './style'





function Login(props){
    usernameRef = useRef('')
    passwordRef = useRef('')

    return (
        <Background style={{justifyContent: 'flex-start',  padding:40}}image={assets.splashBackground} gradients=  {['rgba(103,27,88,.8)', 'transparent']}>
            <ScreenHeader imageStyle={{width:138, height:112}} image={assets.logoSmall} headerText='LOGIN' textStyle = {styles.largeText} height={100}/>
            
            <View style ={styles.textWrapper}>
            <LinearGradient
                    colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={[styles.bottonGradient]}
                    >
                <Pressable style={[styles.buttonStyle,  {backgroundColor:'#272C52', height: 48,width:'99%', marginVertical:1, marginHorizontal:1,  borderRadius:8}]}>

                    <Text style={styles.textStyle}>Sign in with Google</Text>
                </Pressable>
                </LinearGradient>
            </View>
            <View style ={styles.textWrapper}>
            <LinearGradient
                    colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={[styles.bottonGradient]}
                    >
                <Pressable style={[styles.buttonStyle, {backgroundColor:'#272C52', height: 48, width:'98%', marginVertical:1, marginHorizontal:1,  borderRadius:8}]}>

                    <Text style={styles.textStyle}>Sign in with Facebook</Text>
                </Pressable>
                </LinearGradient>
            </View>
            <View style ={styles.textWrapper}>

                <Text style={styles.label}>
                    Username
                </Text>
                <LinearGradient
                    colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={styles.inputGradient}
                    >

                    <TextInput
                        style={styles.input}
                        ref = {usernameRef}
                        />
                </LinearGradient>
            </View>
            <View style ={styles.textWrapper}>

                <Text style={styles.label}>
                    Password
                </Text>
                <LinearGradient
                    colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={styles.inputGradient}
                    >
                        <TextInput
                            style={styles.input}
                            ref = {passwordRef}
                            />
                </LinearGradient>
            </View>
            <View style ={{ flexDirection:'row', marginVertical:20}}>
                
                <LinearGradient
                        colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                        start={{x:0,y:0}}
                        end={{x:1,y:1}}
                        style={styles.bottonGradient}
                        >
                    <CheckBox
                        
                    />
                </LinearGradient>
                <View>

                    <LinearGradient
                            colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                            start={{x:0,y:0}}
                            end={{x:1,y:1}}
                            style={styles.bottonGradient}
                            >
                            <Pressable style={styles.buttonStyle}>

                                <Text style={styles.textStyle}>Register</Text>
                            </Pressable>
                    </LinearGradient>
                </View>
            </View>
            <View style ={ {flexDirection:'row'}}>
                <View>

                    <LinearGradient
                            colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                            start={{x:0,y:0}}
                            end={{x:1,y:1}}
                            style={styles.bottonGradient}
                            >
                            <Pressable style={styles.buttonStyle}>

                                <Text style={styles.textStyle}>Register</Text>
                            </Pressable>
                    </LinearGradient>
                </View>
                <View>

                        <Pressable style={styles.buttonStyle}>

                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
            </View>
        </Background>
    )

}

export default Login