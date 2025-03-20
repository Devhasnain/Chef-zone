import { Text, View } from "react-native";
import { memo } from "react";

import { fourthFormStyle as styles } from "./allForm.style";
import Title from "../../../../components/title/Title";
import Input from "../../../../components/input/Input";
import Label from "../../../../config/Label";


const FourthForm = () => {
    return (
        <View>
            <Title heading={Label.workPreferences} />

            <Text>{Label.HowManyHours}</Text>
            <Input placeholder={Label.hoursPerWeek} />
            <Text style={styles.title}>{Label.travelDistance}</Text>
            <Text>{Label.selectWillingTravel}</Text>
            <Input placeholder={Label.locationSelect} />

        </View>
    )
}

export default memo(FourthForm);