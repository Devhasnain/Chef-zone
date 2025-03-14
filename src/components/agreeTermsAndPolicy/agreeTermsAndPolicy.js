import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

import { navigate } from "../../navigation/NavigationService";
import styles from "./agreeTermsAndPolicy.style";
import colors from "../../config/Colors";


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
                I agree to the{" "}
                <Text
                    style={styles.termsLink}
                    onPress={() => handleNavigate("TermsAndConditions")}
                >
                    Terms and Conditions
                </Text>{" "}
                and{" "}
                <Text
                    style={styles.termsLink}
                    onPress={() => handleNavigate("PrivacyPolicy")}
                >
                    Privacy Policy
                </Text>
            </Text>
        </View>
    );
};

export default AgreeTermsAndPolicy;
