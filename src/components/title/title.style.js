import { StyleSheet } from "react-native";

import colors from "../../config/Colors";


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.accent,
    },
    paragraph: {
        fontSize: 16,
        color: colors.accentLight,
    },
});

export default styles;