import {Text, TouchableOpacity, View} from 'react-native';
import JobCard from '../../components/jobCard/jobCard';
import { navigate } from '../../navigation/NavigationService';

const BrowserJob = () => {
  return (
    <View>
      <Text>BrowserJob</Text>
      <TouchableOpacity onPress={() => navigate('JobDetail')}>
        <JobCard />
      </TouchableOpacity>
    </View>
  );
};

export default BrowserJob;
