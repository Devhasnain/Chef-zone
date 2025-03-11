import { FlatList, Text, TextInput, TouchableOpacity, View, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react';

import { navigate } from '../../navigation/NavigationService';
import ButtonFilter from '../../components/button/Button';
import JobCard from '../../components/jobCard/jobCard';
import { jobDataDemo } from '../../constants/constant';
import Header from '../../components/header/header';
import Input from '../../components/input/Input';
import { images } from '../../config/Images';
import styles from './browserJob.style';


const BrowserJob = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobDataDemo);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterValues, setFilterValues] = useState({
    shiftType: '',
    city: '',
    shiftRole: '',
    minRate: '',
    maxRate: ''
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterJobs({ ...filterValues, searchQuery: query });
  };

  const filterJobs = (filters) => {
    const { shiftType, city, shiftRole, minRate, maxRate, searchQuery } = filters;
    const filtered = jobDataDemo.filter(job => {
      return (
        (!searchQuery || job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (!shiftType || job.type === shiftType) &&
        (!city || job.location.toLowerCase().includes(city.toLowerCase())) &&
        (!shiftRole || job.title.toLowerCase().includes(shiftRole.toLowerCase())) &&
        (!minRate || parseFloat(job.salary.replace('£', '')) >= parseFloat(minRate)) &&
        (!maxRate || parseFloat(job.salary.replace('£', '')) <= parseFloat(maxRate))
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <View style={{ width: "88%" }}>
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={images.filterIcon} style={styles.filterButton} />
        </TouchableOpacity>
      </View>

      {filteredJobs.length > 0 ? (
        <FlatList
          data={filteredJobs}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigate('JobDetail')}>
              <JobCard jobData={item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.textNotFound}>No active shifts found</Text>
      )}

      {/* Filter Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Filters</Text>

            <Text style={{ paddingBottom: 15 }}>Shift Type</Text>
            <View style={styles.radioGroup}>
              <TouchableOpacity style={styles.separateWidth} onPress={() => setFilterValues({ ...filterValues, shiftType: 'Temporary' })}>
                <Text style={filterValues.shiftType === 'Temporary' ? styles.selectedRadio : styles.radio}>Temporary</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.separateWidth} onPress={() => setFilterValues({ ...filterValues, shiftType: 'Permanent' })}>
                <Text style={filterValues.shiftType === 'Permanent' ? styles.selectedRadio : styles.radio}>Permanent</Text>
              </TouchableOpacity>
            </View>

            <Input
              placeholder="Enter city name"
              value={filterValues.city}
              onChange={(text) => setFilterValues({ ...filterValues, city: text })}
            />
            <Input
              placeholder="Enter shift role"
              value={filterValues.shiftRole}
              onChange={(text) => setFilterValues({ ...filterValues, shiftRole: text })}
            />

            <Text>Hourly Rate:</Text>
            <View style={styles.rateContainer}>
              <View style={styles.separateWidth}>
                <Input
                  placeholder="Min"
                  keyboardType="numeric"
                  value={filterValues.minRate}
                  onChange={(text) => setFilterValues({ ...filterValues, minRate: text })}
                />
              </View>
              <View style={styles.separateWidth}>
                <Input
                  placeholder="Max"
                  keyboardType="numeric"
                  value={filterValues.maxRate}
                  onChange={(text) => setFilterValues({ ...filterValues, maxRate: text })}
                />
              </View>
            </View>
            <ButtonFilter text="Apply" onPress={() => {
              filterJobs(filterValues);
              setModalVisible(false);
            }} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BrowserJob;
