import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
      margin: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    date: {
      color: 'gray',
      fontSize: 14,
    },
    body: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 14,
      color: 'gray',
      marginBottom: 5,
    },
    locationRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    location: {
      color: 'gray',
    },
    timeAgo: {
      color: 'gray',
      fontSize: 12,
      marginTop: 5,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    temporaryBadge: {
      backgroundColor: 'orange',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    badgeText: {
      color: 'white',
      fontWeight: 'bold',
    },
    salary: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    hour: {
      fontSize: 14,
      color: 'gray',
    },
  });
 
  export default styles;