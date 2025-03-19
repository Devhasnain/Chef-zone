import { Text, View } from "react-native";

import Header from "../../../../components/header/Header";
import Button from "../../../../components/button/Button";


const ViewRole = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header />
            <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                <Button text="Back of House" additionalStyle={{width:"48%"}}/>
                <Button text="Front of House" additionalStyle={{width:"48%"}} />
            </View>
        </View>
    )
}

export default ViewRole;