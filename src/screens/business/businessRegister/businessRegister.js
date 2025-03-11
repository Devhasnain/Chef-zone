import { View } from "react-native";

import styles from "./businessRegister.style";
import FirstForm from "./firstForm";


const BusinessRegister = () => {
    return(
        <View style={styles.container}>
            <FirstForm/>
        </View>
    )
}

export default BusinessRegister;