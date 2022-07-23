/**
 * @flow
 */

 import React from "react";
 import {
   Dimensions,
   Image,
   StyleSheet,
   Text,
   TouchableHighlight,
   View,
   Pressable,
 } from "react-native";
 import { Asset } from "expo-asset";
 import {
   Audio,
   InterruptionModeAndroid,
   InterruptionModeIOS,
   ResizeMode,
   Video,
 } from "expo-av";
 import * as Font from "expo-font";
 // import Slider from "@react-native-community/slider";
 import { Slider } from "@miblanchard/react-native-slider";
 import Background from "../../components/BackGround";
 import ScreenHeader from "../../components/ScreenHeader";
 import { assets } from "../../assets";
 import CircleSlider from "./CircleSlider";
 import Navigation from "../../components/Navigation";
 
 import { MaterialIcons, Ionicons } from "@expo/vector-icons";

 const { height } = Dimensions.get('window');

 
 class Icon {
   constructor(module, width, height) {
     this.module = module;
     this.width = width;
     this.height = height;
     Asset.fromModule(this.module).downloadAsync();
   }
 }
 
 class PlaylistItem {
   constructor(name, uri, isVideo) {
     this.name = name;
     this.uri = uri;
     this.isVideo = isVideo;
   }
 }
 
 const PLAYLIST = [
   new PlaylistItem(
     "Comfort Fit - “Sorry”",
     "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
     false
   ),
   new PlaylistItem(
     "Big Buck Bunny",
     "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
     true
   ),
   new PlaylistItem(
     "Mildred Bailey – “All Of Me”",
     "https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3",
     false
   ),
   new PlaylistItem(
     "Popeye - I don't scare",
     "https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4",
     true
   ),
   new PlaylistItem(
     "Podington Bear - “Rubber Robot”",
     "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3",
     false
   ),
 ];
 
 const ICON_THROUGH_EARPIECE = "speaker-phone";
 const ICON_THROUGH_SPEAKER = "speaker";
 
 const ICON_PLAY_BUTTON = new Icon(
   require("../../assets/play_button.png"),
   34,
   51
 );
 const ICON_PAUSE_BUTTON = new Icon(
   require("../../assets/pause_button.png"),
   34,
   51
 );
 const ICON_STOP_BUTTON = new Icon(
   require("../../assets/stop_button.png"),
   22,
   22
 );
 const ICON_FORWARD_BUTTON = new Icon(
   require("../../assets/forward_button.png"),
   33,
   25
 );
 const ICON_BACK_BUTTON = new Icon(
   require("../../assets/back_button.png"),
   33,
   25
 );
 
 const ICON_LOOP_ALL_BUTTON = new Icon(
   require("../../assets/loop_all_button.png"),
   77,
   35
 );
 const ICON_LOOP_ONE_BUTTON = new Icon(
   require("../../assets/loop_one_button.png"),
   77,
   35
 );
 
 const ICON_MUTED_BUTTON = new Icon(
   require("../../assets/muted_button.png"),
   67,
   58
 );
 const ICON_UNMUTED_BUTTON = new Icon(
   require("../../assets/unmuted_button.png"),
   67,
   58
 );
 
 const ICON_TRACK_1 = new Icon(require("../../assets/track_1.png"), 166, 5);
 const ICON_THUMB_1 = new Icon(require("../../assets/thumb_1.png"), 18, 19);
 const ICON_THUMB_2 = new Icon(require("../../assets/thumb_2.png"), 15, 19);
 
 const LOOPING_TYPE_ALL = 0;
 const LOOPING_TYPE_ONE = 1;
 const LOOPING_TYPE_ICONS = { 0: ICON_LOOP_ALL_BUTTON, 1: ICON_LOOP_ONE_BUTTON };
 
 const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
 const BACKGROUND_COLOR = "#FFF8ED";
 const DISABLED_OPACITY = 0.5;
 const FONT_SIZE = 14;
 const LOADING_STRING = "... loading ...";
 const BUFFERING_STRING = "...buffering...";
 const RATE_SCALE = 32.0;
 const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;
 
 export default class App extends React.Component {
   constructor(props) {
     super(props);
     this.index = 0;
     this.isSeeking = false;
     this.shouldPlayAtEndOfSeek = false;
     this.playbackInstance = null;
     this.state = {
       showVideo: false,
       playbackInstanceName: LOADING_STRING,
       loopingType: LOOPING_TYPE_ALL,
       muted: false,
       playbackInstancePosition: null,
       playbackInstanceDuration: null,
       shouldPlay: false,
       isPlaying: false,
       isBuffering: false,
       isLoading: true,
       fontLoaded: false,
       shouldCorrectPitch: true,
       volume: 1.0,
       rate: 1.0,
       videoWidth: DEVICE_WIDTH,
       videoHeight: VIDEO_CONTAINER_HEIGHT,
       poster: false,
       useNativeControls: false,
       fullscreen: false,
       throughEarpiece: false,
       angle: 1/32 * 180,
     };
   }
   
 
   componentDidMount() {
     Audio.setAudioModeAsync({
       allowsRecordingIOS: false,
       staysActiveInBackground: false,
       interruptionModeIOS: InterruptionModeIOS.DoNotMix,
       playsInSilentModeIOS: true,
       shouldDuckAndroid: true,
       interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
       playThroughEarpieceAndroid: false,
     });
 
     this.setState({ fontLoaded: true });
   }
 
   
   async _loadNewPlaybackInstance(playing) {
     if (this.playbackInstance != null) {
       await this.playbackInstance.unloadAsync();
       // this.playbackInstance.setOnPlaybackStatusUpdate(null);
       this.playbackInstance = null;
     }
 
     const source = { uri: PLAYLIST[this.index].uri };
     const initialStatus = {
       shouldPlay: playing,
       rate: this.state.rate,
       shouldCorrectPitch: this.state.shouldCorrectPitch,
       volume: this.state.volume,
       isMuted: this.state.muted,
       isLooping: this.state.loopingType === LOOPING_TYPE_ONE,
       // // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
       // androidImplementation: 'MediaPlayer',
     };
 
     if (PLAYLIST[this.index].isVideo) {
       await this._video.loadAsync(source, initialStatus);
       // this._video.onPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
       this.playbackInstance = this._video;
       const status = await this._video.getStatusAsync();
     } else {
       const { sound, status } = await Audio.Sound.createAsync(
         source,
         initialStatus,
         this._onPlaybackStatusUpdate
       );
       this.playbackInstance = sound;
     }
 
     this._updateScreenForLoading(false);
   }
 
   _mountVideo = (component) => {
     this._video = component;
     this._loadNewPlaybackInstance(false);
   };
 
   _updateScreenForLoading(isLoading) {
     if (isLoading) {
       this.setState({
         showVideo: false,
         isPlaying: false,
         playbackInstanceName: LOADING_STRING,
         playbackInstanceDuration: null,
         playbackInstancePosition: null,
         isLoading: true,
       });
     } else {
       this.setState({
         playbackInstanceName: PLAYLIST[this.index].name,
         showVideo: PLAYLIST[this.index].isVideo,
         isLoading: false,
       });
     }
   }
 
   _onPlaybackStatusUpdate = (status) => {
     if (status.isLoaded) {
       this.setState({
         playbackInstancePosition: status.positionMillis,
         playbackInstanceDuration: status.durationMillis,
         shouldPlay: status.shouldPlay,
         isPlaying: status.isPlaying,
         isBuffering: status.isBuffering,
         rate: status.rate,
         muted: status.isMuted,
         volume: status.volume,
         loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
         shouldCorrectPitch: status.shouldCorrectPitch,
       });
       if (status.didJustFinish && !status.isLooping) {
         this._advanceIndex(true);
         this._updatePlaybackInstanceForIndex(true);
       }
     } else {
       if (status.error) {
         console.log(`FATAL PLAYER ERROR: ${status.error}`);
       }
     }
   };
 
   _onLoadStart = () => {
     console.log(`ON LOAD START`);
   };
 
   _onLoad = (status) => {
     console.log(`ON LOAD : ${JSON.stringify(status)}`);
   };
 
   _onError = (error) => {
     console.log(`ON ERROR : ${error}`);
   };
 
   _onReadyForDisplay = (event) => {
     const widestHeight =
       (DEVICE_WIDTH * event.naturalSize.height) / event.naturalSize.width;
     if (widestHeight > VIDEO_CONTAINER_HEIGHT) {
       this.setState({
         videoWidth:
           (VIDEO_CONTAINER_HEIGHT * event.naturalSize.width) /
           event.naturalSize.height,
         videoHeight: VIDEO_CONTAINER_HEIGHT,
       });
     } else {
       this.setState({
         videoWidth: DEVICE_WIDTH,
         videoHeight:
           (DEVICE_WIDTH * event.naturalSize.height) / event.naturalSize.width,
       });
     }
   };
 
   _onFullscreenUpdate = (event) => {
     console.log(
       `FULLSCREEN UPDATE : ${JSON.stringify(event.fullscreenUpdate)}`
     );
   };
 
   _advanceIndex(forward) {
     this.index =
       (this.index + (forward ? 1 : PLAYLIST.length - 1)) % PLAYLIST.length;
   }
 
   async _updatePlaybackInstanceForIndex(playing) {
     this._updateScreenForLoading(true);
 
     this.setState({
       videoWidth: DEVICE_WIDTH,
       videoHeight: VIDEO_CONTAINER_HEIGHT,
     });
 
     this._loadNewPlaybackInstance(playing);
   }
 
   _onPlayPausePressed = () => {
     if (this.playbackInstance != null) {
       if (this.state.isPlaying) {
         this.playbackInstance.pauseAsync();
       } else {
         this.playbackInstance.playAsync();
       }
     }
   };
 
   
 
   _onForwardPressed = () => {
     if (this.playbackInstance != null) {
       this._advanceIndex(true);
       this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
     }
   };
 
   _onBackPressed = () => {
     if (this.playbackInstance != null) {
       this._advanceIndex(false);
       this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
     }
   };
 
   _onMutePressed = () => {
     if (this.playbackInstance != null) {
       this.playbackInstance.setIsMutedAsync(!this.state.muted);
     }
   };
 
   _onLoopPressed = () => {
     if (this.playbackInstance != null) {
       this.playbackInstance.setIsLoopingAsync(
         this.state.loopingType !== LOOPING_TYPE_ONE
       );
     }
   };
 
   _onVolumeSliderValueChange = (value) => {
     if (this.playbackInstance != null) {
       this.playbackInstance.setVolumeAsync(value);
     }
   };
 
   _trySetRate = async (rate, shouldCorrectPitch) => {
     if (this.playbackInstance != null) {
       try {
         await this.playbackInstance.setRateAsync(rate, shouldCorrectPitch);
       } catch (error) {
         // Rate changing could not be performed, possibly because the client's Android API is too old.
       }
     }
   };
 
   _onRateSliderSlidingComplete = async (value) => {
     console.log(value*RATE_SCALE)
     this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch);
   };
 
   _onAddPress =() => {
     const rate = Math.min(this.state.rate + 1, RATE_SCALE)
     this._onRateSliderSlidingComplete(rate/ RATE_SCALE)
     this.setState({ rate, angle: (rate / RATE_SCALE) * 180 });
     
   }
   
   _onSubPress=() => {
     const rate = Math.max(this.state.rate - 1, 1)
     this._onRateSliderSlidingComplete(rate / RATE_SCALE)
     this.setState({ rate, angle: (rate / RATE_SCALE) * 180 });
 
   }
 
   _onPitchCorrectionPressed = async (value) => {
     this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch);
   };
 
   _onSeekSliderValueChange = (value) => {
     if (this.playbackInstance != null && !this.isSeeking) {
       this.isSeeking = true;
       this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
       this.playbackInstance.pauseAsync();
     }
   };
 
   _onSeekSliderSlidingComplete = async (value) => {
     if (this.playbackInstance != null) {
       this.isSeeking = false;
       const seekPosition = value * this.state.playbackInstanceDuration;
       if (this.shouldPlayAtEndOfSeek) {
         this.playbackInstance.playFromPositionAsync(seekPosition);
       } else {
         this.playbackInstance.setPositionAsync(seekPosition);
       }
     }
   };
 
   _getSeekSliderPosition() {
     if (
       this.playbackInstance != null &&
       this.state.playbackInstancePosition != null &&
       this.state.playbackInstanceDuration != null
     ) {
       return (
         this.state.playbackInstancePosition /
         this.state.playbackInstanceDuration
       );
     }
     return 0;
   }
 
   _getMMSSFromMillis(millis) {
     const totalSeconds = millis / 1000;
     const seconds = Math.floor(totalSeconds % 60);
     const minutes = Math.floor(totalSeconds / 60);
 
     const padWithZero = (number) => {
       const string = number.toString();
       if (number < 10) {
         return "0" + string;
       }
       return string;
     };
     return padWithZero(minutes) + ":" + padWithZero(seconds);
   }
 
   _getCurrentTimestamp() {
     if (
       this.playbackInstance != null &&
       this.state.playbackInstancePosition != null &&
       this.state.playbackInstanceDuration != null
     ) {
       return `${this._getMMSSFromMillis(this.state.playbackInstancePosition)}`;
     }
     return "";
   }
   _getEndTimestamp() {
     if (
       this.playbackInstance != null &&
       this.state.playbackInstancePosition != null &&
       this.state.playbackInstanceDuration != null
     ) {
       return `${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
     }
     return "";
   }
 
   _onPosterPressed = () => {
     this.setState({ poster: !this.state.poster });
   };
 
   _onUseNativeControlsPressed = () => {
     this.setState({ useNativeControls: !this.state.useNativeControls });
   };
 
   _onFullscreenPressed = () => {
     try {
       this._video.presentFullscreenPlayer();
     } catch (error) {
       console.log(error.toString());
     }
   };
 
   _onSpeakerPressed = () => {
     this.setState(
       (state) => {
         return { throughEarpiece: !state.throughEarpiece };
       },
       () =>
         Audio.setAudioModeAsync({
           allowsRecordingIOS: false,
           interruptionModeIOS: InterruptionModeIOS.DoNotMix,
           playsInSilentModeIOS: true,
           shouldDuckAndroid: true,
           interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
           playThroughEarpieceAndroid: this.state.throughEarpiece,
         })
     );
   };
 
   render() {
     return (
       <Background
         style={{ justifyContent: "flex-start" }}
         image={assets.splashBackground}
         gradients={["rgba(30, 34, 64, 0.8)", "rgba(30, 34, 64, 0.8)"]}
       >
          <ScreenHeader
        imageStyle={{ width: 120, height: 100 }}
        image={assets.logoSmall}
        headerText={`LOOP`}
        textStyle={{ color: "red", fontSize: 35, fontFamily: "Bold" }}
        height={height * 0.2}
        navigation={this.props.navigation}
      />
      <Navigation />
         
         <View>
           <View>
             <CircleSlider
               max={180}
               angle={this.state.angle}
               btnRadius={20}
               meterColor={"#B402F5"}
               strokeColor={"rgba(211,91,255,0.38)"}
               textColor={"#B402F5"}
               strokeWidth={25}
               dialWidth={20}
               setAngle={(x) => {
                 this.setState({ angle: x, rate:x/180 * RATE_SCALE });
                 this._onRateSliderSlidingComplete(x/180)
     
               }}
               textSize={1}
             />
           </View>
           <View style={{ alignItems: "center" }}>
             <Text
               style={{
                 color: "white",
                 bottom: 50,
                 fontSize: 50,
                 fontFamily: "Bold",
               }}
             >
               TAP
             </Text>
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 marginVertical: 20,
                 alignItems: "center",
                 bottom: 50,
               }}
             >
               <Pressable
                 style={{ backgroundColor: "red" }}
                 onPress={this._onSubPress}
               >
                 <Ionicons
                   name="remove"
                   ios="ios-remove"
                   andriod="md-remove"
                   color={"white"}
                   size={30}
                 />
               </Pressable>
               <View style={{ flex: 1, height: 1, backgroundColor: "red" }} />
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                 <View
                   style={{
                     backgroundColor: "white",
                     borderRadius: 5,
                     width: 50,
                     height: 30,
                     justifyContent: "center",
                     padding: 5,
                     marginLeft: 5,
                   }}
                 >
                   <Text style={{ fontSize: 20 }}>
                     {Math.floor((this.state.angle / 180) * RATE_SCALE)}
                   </Text>
                 </View>
                 <Text
                   style={{
                     color: "white",
                     fontFamily: "SemiBold",
                     fontSize: 18,
                     marginHorizontal: 5,
                   }}
                 >
                   BPM
                 </Text>
               </View>
               <View style={{ flex: 1, height: 1, backgroundColor: "red" }} />
               <Pressable
                 style={{ backgroundColor: "red" }}
                 onPress={this._onAddPress}
               >
                 <Ionicons
                   name="add"
                   ios="ios-add"
                   andriod="md-add"
                   color={"white"}
                   size={30}
                 />
               </Pressable>
             </View>
           </View>
         </View>
         
         <View >
           <Video
             ref={this._mountVideo}
             resizeMode={ResizeMode.CONTAIN}
             onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
             onLoadStart={this._onLoadStart}
             onLoad={this._onLoad}
             onError={this._onError}
             onFullscreenUpdate={this._onFullscreenUpdate}
             onReadyForDisplay={this._onReadyForDisplay}
             useNativeControls={this.state.useNativeControls}
           />
         </View>
         <View >
           <View
             style={{
               flexDirection: "row",
 
               alignItems: "center",
             }}
           >
             <View style={{ bottom: 4 }}>
               <Ionicons
                 name="volume-high"
                 ios="ios-volume-high"
                 andriod="md-volume-high"
                 color={"white"}
               />
             </View>
             <View style={{ width: "80%", marginLeft: 5 }}>
               <Slider
                 value={this._getSeekSliderPosition()}
                 onValueChange={this._onSeekSliderValueChange}
                 onSlidingComplete={this._onSeekSliderSlidingComplete}
                 disabled={this.state.isLoading}
                 minimumTrackTintColor="white"
                 thumbTintColor="white"
                 // onValueChange={(value) => setValue(value)}
                 trackStyle={{
                   height: 2,
                 }}
                 thumbStyle={{
                   color: "white",
                 }}
               />
               <View
                 style={{
                   flexDirection: "row",
                   justifyContent: "space-between",
                   bottom: 10,
                 }}
               >
                 <Text style={{ color: "white" }}>
                   {this._getCurrentTimestamp()}
                 </Text>
                 <Text style={{ color: "white" }}>
                   {this._getEndTimestamp()}
                 </Text>
               </View>
             </View>
           </View>
         </View>
         <View style={styles.nameContainer}>
           <Text style={[styles.text, {}]}>
             {this.state.playbackInstanceName}
           </Text>
         </View>
         <View
           style={{
             flexDirection: "row",
 
            //  paddingHorizontal: 10,
            width:'80%',
 
             justifyContent: "space-between",
           }}
         >
           <Pressable
             style={{
               borderRadius: 20,
               width: 40,
               height: 40,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Ionicons
               name="arrow-back-circle"
               ios="ios-arrow-back-circle"
               andriod="md-arrow-back-circle"
               color={"white"}
               size={24}
             />
           </Pressable>
           <Pressable
             onPress={this._onBackPressed}
             disabled={this.state.isLoading}
             style={{
               borderRadius: 20,
               width: 40,
               height: 40,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Ionicons
               name="play-back-sharp"
               ios="ios-play-back-sharp"
               andriod="md-play-back-sharp"
               color={"white"}
               size={24}
             />
           </Pressable>
           <Pressable
             onPress={this._onPlayPausePressed}
             disabled={this.state.isLoading}
             style={{
               borderRadius: 20,
               width: 40,
               height: 40,
               backgroundColor: "#96BCF9",
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Ionicons
               name={this.state.isPlaying ? "pause" : "play"}
               ios={this.state.isPlaying ? "ios-pause" : "ios-play"}
               andriod={this.state.isPlaying ? "md-pause" : "md-play"}
               color={"black"}
               size={15}
             />
           </Pressable>
           <Pressable
             onPress={this._onForwardPressed}
             disabled={this.state.isLoading}
             style={{
               borderRadius: 20,
               width: 40,
               height: 40,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Ionicons
               name="play-forward-sharp"
               ios="ios-play-forward-sharp"
               andriod="md-play-forward-sharp"
               color={"white"}
               size={24}
             />
           </Pressable>
           <Pressable
             style={{
               borderRadius: 20,
               width: 40,
               height: 40,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Ionicons
               name="shuffle"
               ios="ios-shuffle"
               andriod="md-shuffle"
               color={"white"}
               size={24}
             />
           </Pressable>
         </View>
         
         
         
       </Background>
     );
   }
 }
 
 const styles = StyleSheet.create({
   emptyContainer: {
     alignSelf: "stretch",
     backgroundColor: BACKGROUND_COLOR,
   },
   container: {
     flex: 1,
     flexDirection: "column",
     justifyContent: "space-between",
     alignItems: "center",
     alignSelf: "stretch",
     backgroundColor: BACKGROUND_COLOR,
   },
   wrapper: {},
   nameContainer: {
     height: FONT_SIZE,
   },
   space: {
     height: FONT_SIZE,
   },
   videoContainer: {
     height: VIDEO_CONTAINER_HEIGHT,
   },
   video: {
     maxWidth: DEVICE_WIDTH,
   },
   playbackContainer: {
     flex: 1,
     flexDirection: "column",
     justifyContent: "space-between",
     alignItems: "center",
     alignSelf: "stretch",
     minHeight: ICON_THUMB_1.height * 2.0,
     maxHeight: ICON_THUMB_1.height * 2.0,
   },
   playbackSlider: {
     alignSelf: "stretch",
   },
   timestampRow: {
     flex: 1,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     alignSelf: "stretch",
     minHeight: FONT_SIZE,
   },
   text: {
     color:'white',
     opacity:.46,
     fontSize: 13,
     minHeight: FONT_SIZE,
   },
   buffering: {
     textAlign: "left",
     paddingLeft: 20,
   },
   timestamp: {
     textAlign: "right",
     paddingRight: 20,
   },
   button: {
     backgroundColor: BACKGROUND_COLOR,
   },
   buttonsContainerBase: {
     flex: 1,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
   },
   buttonsContainerTopRow: {
     maxHeight: ICON_PLAY_BUTTON.height,
     minWidth: DEVICE_WIDTH / 2.0,
     maxWidth: DEVICE_WIDTH / 2.0,
   },
   buttonsContainerMiddleRow: {
     maxHeight: ICON_MUTED_BUTTON.height,
     alignSelf: "stretch",
     paddingRight: 20,
   },
   volumeContainer: {
     flex: 1,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     minWidth: DEVICE_WIDTH / 2.0,
     maxWidth: DEVICE_WIDTH / 2.0,
   },
   volumeSlider: {
     width: DEVICE_WIDTH / 2.0 - ICON_MUTED_BUTTON.width,
   },
   buttonsContainerBottomRow: {
     maxHeight: ICON_THUMB_1.height,
     alignSelf: "stretch",
     paddingRight: 20,
     paddingLeft: 20,
   },
   rateSlider: {
     width: DEVICE_WIDTH / 2.0,
   },
   buttonsContainerTextRow: {
     maxHeight: FONT_SIZE,
     alignItems: "center",
     paddingRight: 20,
     paddingLeft: 20,
     minWidth: DEVICE_WIDTH,
     maxWidth: DEVICE_WIDTH,
   },
 });
 