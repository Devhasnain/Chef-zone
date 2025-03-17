import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useCallback, useState} from 'react';

import BrowserJobFilterModal from '../../components/browserJobModal/browserJobModal';
import {navigate} from '../../navigation/NavigationService';
import JobCard from '../../components/jobCard/jobCard';
import {jobDataDemo} from '../../constants/constant';
import Header from '../../components/header/header';
import Input from '../../components/input/Input';
import {images} from '../../config/Images';
import styles from './browserJob.style';
import useStoragePermission from '../../utils/useStoragePermission';
import {NativeDocumentPicker} from '@react-native-documents/picker/lib/typescript/spec/NativeDocumentPicker';

const BrowserJob = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobDataDemo);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterValues, setFilterValues] = useState({
    shiftType: '',
    city: '',
    shiftRole: '',
    minRate: '',
    maxRate: '',
  });

  const handleSearch = query => {
    setSearchQuery(query);
    filterJobs({...filterValues, searchQuery: query});
  };

  const filterJobs = filters => {
    const {shiftType, city, shiftRole, minRate, maxRate, searchQuery} = filters;
    const filtered = jobDataDemo.filter(job => {
      return (
        (!searchQuery ||
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (!shiftType || job.type === shiftType) &&
        (!city || job.location.toLowerCase().includes(city.toLowerCase())) &&
        (!shiftRole ||
          job.title.toLowerCase().includes(shiftRole.toLowerCase())) &&
        (!minRate ||
          parseFloat(job.salary.replace('£', '')) >= parseFloat(minRate)) &&
        (!maxRate ||
          parseFloat(job.salary.replace('£', '')) <= parseFloat(maxRate))
      );
    });
    setFilteredJobs(filtered);
  };
  //
  const pickDocument = async () => {
    const hasPermission = await useStoragePermission();
    if (!hasPermission) return;

    try {
      const res = await NativeDocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('Selected file:', res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('Unknown error:', err);
      }
    }
  };

  const renderJobCard = useCallback(({item}) => {
    const {} = item;
    return <JobCard jobData={item} />;
  }, []);

  // Main return
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {/* <Image source={images?.filterIcon} style={styles.filterButton} /> */}
        </TouchableOpacity>
      </View>

      {filteredJobs.length > 0 ? (
        <FlatList
          contentContainerStyle={{paddingHorizontal: 15}}
          data={filteredJobs}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderJobCard}
        />
      ) : (
        <Text style={styles.textNotFound}>No active shifts found</Text>
      )}

      {/* Filter Modal */}
      <BrowserJobFilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        filterJobs={filterJobs}
      />
    </View>
  );
};

export default BrowserJob;
