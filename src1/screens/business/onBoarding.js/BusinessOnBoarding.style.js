import { StyleSheet } from "react-native";

import colors from "../../../config/Colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    formContainer: {
        paddingHorizontal: 20,
        flex: 1,
    },
    error: {
        color: "red"
    },
    oneRowTwoFieldConatiner: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    oneRowTwoField: {
        width: "48%"
    },
    instructionText: {
        paddingVertical: 5
    },
    uploadSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoContainer: {
        position: "relative",
        alignSelf: "flex-end"
    },
    logoBox: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        overflow: "hidden"
    },
    img: {
        width: "100%",
        height: "100%",
    },
    cameraButton: {
        position: "absolute",
        top: 40,
        left: -18,
        padding: 5,
        borderRadius: 20,
        backgroundColor: colors.secondary,
        borderWidth: 1
    },
    cameraIcon: {
        width: 25,
        height: 25
    },
    termsText: {
        paddingVertical: 15
    },
    termsLink: {
        fontWeight: "900",
        textDecorationLine: "underline"
    },
    btnMargin:{
        marginBottom: 15
    }
});

export default styles;
