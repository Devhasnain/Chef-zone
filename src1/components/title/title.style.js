import { StyleSheet } from "react-native";

import colors from "../../config/Colors";
import fonts from "../../config/Fonts";


const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        /// testing
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.accent,
        fontFamily: fonts.poppinsRegular
    },
    paragraph: {
        fontSize: 16,
        color: colors.accentLight,
        fontFamily: fonts.poppinsRegular
    },
});

export default styles;