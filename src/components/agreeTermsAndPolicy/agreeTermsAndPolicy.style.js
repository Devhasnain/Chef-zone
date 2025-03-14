// fifthForm.style.js
import { StyleSheet } from "react-native";

import colors from "../../config/Colors";


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        paddingVertical:10
    },
    termsText: {
        color: colors.text,
        fontSize: 14,
        width: "95%"
    },
    termsLink: {
        color: colors.accent,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },

});

export default styles;
