import { StyleSheet } from "react-native";

import colors from "../../../../config/Colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgSecondary,
    },
    backButton: {
        alignSelf: "flex-start",
        paddingBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.accentLight,
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
        paddingBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: "600",
        paddingVertical: 10,
    },
    shiftRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        padding: 7,
    },
    shiftRowText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        padding: 7,
        backgroundColor: "#eaeaea",
        borderRadius: 7
    },
    shiftLabel: {
        fontWeight: "bold",
        color: colors.accent,
    },
    dayLabel: {
        fontSize: 16,
        fontWeight: "600",
        width: 50,
    },
    timeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingVertical: 10,
        width: "80%"
    },
    timeRowContainer: {
        alignItems: "flex-end",
        paddingHorizontal: 7,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "75%"
    }
});
