import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";


function InputLinearGradient(props){
    return (<LinearGradient
                    colors={['rgba(32,197,149,1)', 'rgba(32,197,149,0)']}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    style={styles.inputGradient}
                    >
                        {props.chidren}
    </LinearGradient>)
}


export default InputLinearGradient