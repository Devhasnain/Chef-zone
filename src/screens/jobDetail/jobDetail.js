import { View } from "react-native"
import JobDetailScreen from "../../components/jobDetail/jobDetailScreen";
import Header from "../../components/header/header";

const JobDetail = () => {
    return(
        <View style={{flex:1}}>
            <Header/>
            <JobDetailScreen/>
        </View>
    )
}


export default JobDetail;