import { ScrollView, Text, View } from "react-native";
import { useState } from "react";

import { backOfHouseRoles, frontOfHouseRoles } from "../../../../constants/constant";
import TextSelect from "../../../../components/textSelect/TextSelect";
import { selectRolesStyles as styles } from './allJobForm.style';
import Header from "../../../../components/header/Header";
import Button from "../../../../components/button/Button";
import colors from "../../../../config/Colors";
import Label from "../../../../config/Label";


const SelectRole = () => {
    const [isFrontOfHouse, setIsFrontOfHouse] = useState(false);

    const handleSingleSelect = (id, isSelected) => {
        console.log(`Role ${id} was ${isSelected ? "selected" : "deselected"}`);
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.contentWrapper}>
                <View style={styles.buttonRow}>
                    <Button
                        text="Back of House"
                        additionalStyle={[styles.button, !isFrontOfHouse ? styles.activeButton : styles.inactiveButton]}
                        additionalTestStyle={{ color: isFrontOfHouse ? colors.accent : colors.secondary }}
                        onPress={() => setIsFrontOfHouse(false)}
                    />
                    <Button
                        text="Front of House"
                        additionalStyle={[styles.button, isFrontOfHouse ? styles.activeButton : styles.inactiveButton]}
                        additionalTestStyle={{ color: !isFrontOfHouse ? colors.accent : colors.secondary }}
                        onPress={() => setIsFrontOfHouse(true)}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.title}>{Label.selectARole}</Text>
                    <TextSelect
                        rolesData={isFrontOfHouse ? frontOfHouseRoles : backOfHouseRoles}
                        onSingleSelect={handleSingleSelect}
                    />
                    <Button text={Label.continue} additionalStyle={styles.continueButton} />
                </ScrollView>

            </View>
        </View>
    );
};

export default SelectRole;
