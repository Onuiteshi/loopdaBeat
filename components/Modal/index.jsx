import { Modal, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";



function Modal(props){
    return (
        <View style={[styles.backgroundContainer ]}>
            <Modal>
                <Text>PAYMENT CONFIRMATION</Text>
                <Text>Thanks for your payment. You can now proceed and enjoy the loops </Text>
                <Pressable>
                    <Text>Continue</Text>
                </Pressable>
            </Modal>
        </View>
    )
}


export default Modal