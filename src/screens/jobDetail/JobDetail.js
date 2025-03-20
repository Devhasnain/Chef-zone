import { ScrollView } from "react-native";
import { View } from "react-native";

import JobDetailScreen from "../../components/jobDetailScreen/JobDetailScreen";
import Header from "../../components/header/Header";
import Styles from "./jobDetail.style";


const JobDetail = () => {
    return (
        <View style={Styles.container}>
            <Header />
            <JobDetailScreen />
        </View>
    )
}


export default JobDetail;