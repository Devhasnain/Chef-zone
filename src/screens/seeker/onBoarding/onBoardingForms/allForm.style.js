import { StyleSheet } from 'react-native';

import colors from '../../../../config/Colors';


export const firstFormStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.bgSecondary,
    },
    instructionText: {
        paddingVertical: 5
    },
    uploadSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
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
    oneRowTwoFieldConatiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    oneRowTwoField: {
        width: "48%"
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
    label: {
        paddingLeft: 5,
        paddingVertical: 10
    },
    checkContainer: {
        flexDirection: "row", alignItems: "center"
    },
    checkBoxIcon: {
        backgroundColor: "transparent",
        borderWidth: 0,
        padding: 0
    },
    checkBoxIconText: {
        fontStyle: 16
    }

});


export const secondFormStyle = StyleSheet.create({
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

export const fourthFormStyle = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "600", paddingTop: 15,
        paddingBottom: 5
    }

});


export const fifthFormStyle = StyleSheet.create({
    termsText: {
        paddingVertical: 15
    },
    termsLink: {
        fontWeight: "900",
        textDecorationLine: "underline"
    }
})


export const sixthFormStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    statementContainer: {
        paddingTop: 20,
    },
    statementTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 5,
    },
    greyText: {
        fontFamily: 'Montserrat-Regular',
        paddingLeft: 8,
        width: '94%',
        color: 'grey',
        paddingTop: 10,
        fontSize: 15,
    },
    detailText: {
        color: colors.accentLight,
        fontSize: 15,
    },
    arrowIcon: {
        color: colors.primary,
    },
    rowWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 15,
    },
    checkbox: (checked) => ({
        width: 24,
        height: 24,
        borderWidth: 1.5,
        borderColor: checked ? colors.primary : 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    checkIcon: {
        color: colors.primary,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 10,
    },
});


export const seventhFormStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    policyContainer: {
      paddingBottom: 20,
    },
    policyItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    policyContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      flex: 1,
    },
    checkIcon: {
      borderColor: colors.primary,
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      padding: 3,
      borderRadius: 5,
      marginTop: 2,
    },
    textContainer: {
      flex: 1,
    },
    policyTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    policySubtitle: {
      fontSize: 14,
      color: '#888',
    },
    policyContentText: {
      marginTop: 5,
      color: '#555',
    },
    expandIcon: {
      alignSelf: 'center',
    },
  });


  
  export const eightFormStyle = StyleSheet.create({
    questionText: {
        fontSize: 18,
        fontWeight: "600",
    },
    buttonRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        justifyContent: "space-between",
    },
    buttonContainer: {
        width: "48%",
    },
    videoHeading: {
        paddingTop: 20,
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: "600",
    },
    videoNote: {
        color: colors.accentLight,
    },
});



export const ninthFormStyle = StyleSheet.create({
    container: {
      backgroundColor: colors.bgSecondary,
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 10,
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    radioOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    radio: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#aaa',
      marginRight: 5,
    },
    radioSelected: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#0078D4',
      backgroundColor: '#0078D4',
      marginRight: 5,
    },
    radioText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    description: {
      fontSize: 14,
      color: '#555',
      marginBottom: 15,
    },
    fieldTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 5,
    },
    uploadBox: {
      width: '100%',
      height: 120,
      borderWidth: 1,
      borderColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    icon: {
      width: 40,
      height: 40,
      tintColor: '#FFAA00',
    },
  });