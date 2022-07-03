import {View,TextInput,Text, Pressable, useWindowDimensions} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Background from '../../components/BackGround'
import ScreenHeader from '../../components/ScreenHeader'
import { LinearGradient } from 'expo-linear-gradient'
import SongItems from '../../components/SongItems'
import Checkbox from "expo-checkbox";
import { assets } from '../../assets'


function ImportLoop(){
    const { height } = useWindowDimensions();
    return(

        <Background
        style={{ justifyContent: "flex-start"}}
        image={assets.splashBackground}
        gradients={["rgba(103,27,88,.8)", "transparent"]}
        >
     <ScreenHeader
        imageStyle={{ width: 138, height: 112 }}
        image={assets.logoSmall}
        headerText="IMPORT LOOP"
        textStyle={{color:'white', fontSize:25, backgroundColor:'red', padding:10}}
        height={height*0.22}
        />
        <View style={{width:'80%',marginTop:0.1*height, justifyContent:'flex-start'}}>

        <Text style={{color:'white', fontSize:18}}>
            Choose File
        </Text>
        </View>
      <View style={{flexDirection:'row', width:'80%', alignItems:'center'}}>
        <TextInput style={{width:'80%', height:39, backgroundColor:'white'}}/>
        <View style={{backgroundColor:'red', padding:9, margin:5}}>
            
            <Ionicons ios="ios-download" andriod="md-download" name="download" color={'white'} size={20}/>

        </View>

      </View>
      <View style={{flexDirection: "row", width:'80%', justifyContent:'flex-start'}}>
          <Checkbox
            // value={isSelected}
            // onValueChange={setSelection}
            style={{
                alignSelf: "center",
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#20C595",
              }}
          />
          <Text style={{
                    margin: 8,
                    fontFamily: "Regular",
                    color: "rgba(255, 255, 255, 0.6)",
                }}
            >
                Check for Resale
            </Text>
        </View>
        <LinearGradient
                            colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                            start={{x:0,y:0}}
                            end={{x:1,y:1}}
                            style={{borderRadius:8}}
                            >
                            <Pressable style={{
                                                width:150,
                                                height:36,
                                                borderRadius:50,
                                                justifyContent:"center",
                                                alignItems:"center"
                                                }}>

                                <Text style={{fontSize:15,color:'white'}}>Import Loop</Text>
                            </Pressable>
                    </LinearGradient>

    </Background>
    )
}
export default ImportLoop