import { ScrollView } from "react-native";
import { View } from "react-native";

import JobDetailScreen from "../../components/jobDetailScreen/jobDetailScreen";
import Header from "../../components/header/header";
import Styles from "./jobDetail.style";


const JobDetail = () => {
    return (
        <View style={Styles.container}>
            <Header />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <JobDetailScreen />
            </ScrollView>
        </View>
    )
}


export default JobDetail;