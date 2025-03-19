import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { memo, useState } from "react";

import { navigate } from "../../navigation/NavigationService";
import styles from "./agreeTermsAndPolicy.style";
import colors from "../../config/Colors";
import Label from "../../config/Label";


const AgreeTermsAndPolicy = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleNavigate = (screen) => {
        navigate("AppStack", { screen: screen });
    };

    const toggleCheckbox = () => setIsChecked(!isChecked);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={toggleCheckbox}
            >
                <Icon
                    name={isChecked ? "check-square" : "square-o"}
                    size={20}
                    color={colors.primary}
                />
            </TouchableOpacity>
            <Text style={styles.termsText}>
                {Label.iAgreeToThe} {" "}
                <Text
                    style={styles.termsLink}
                    onPress={() => handleNavigate("TermsAndConditions")}
                >
                    {Label.termsAndConditions}
                </Text>{" "}
                {Label.and} {" "}
                <Text
                    style={styles.termsLink}
                    onPress={() => handleNavigate("PrivacyPolicy")}
                >
                    {Label.privacyPolicy}
                </Text>
            </Text>
        </View>
    );
};

export default memo(AgreeTermsAndPolicy);
