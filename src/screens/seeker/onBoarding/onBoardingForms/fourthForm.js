import { Text, View } from "react-native";

import { fourthFormStyle as styles } from "./allForm.style";
import Title from "../../../../components/title/title";
import Input from "../../../../components/input/Input";
import Label from "../../../../config/Label";


const FourthForm = () => {
    return (
        <View>
            <Title heading={"Working preferences"} />

            <Text>{Label.HowManyHours}</Text>
            <Input placeholder="Hours per week" />
            <Text style={styles.title}>Travel distance</Text>
            <Text>Select how far you are willing to travel for work.</Text>
            <Input placeholder="Location selected" />

        </View>
    )
}

export default FourthForm;