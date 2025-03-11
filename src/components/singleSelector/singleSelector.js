import { View, Text, TouchableOpacity, Modal, TextInput, FlatList, } from "react-native";
import React, { memo, useState } from "react";

import { salaryData } from "../../constants/constant";
import styles from "./singleSelector.style";


const SingleSelect = ({ placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  // Filter options based on search input
  const filteredData = salaryData.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Dropdown Button */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectedText}>
          {value ? salaryData.find((item) => item.value === value)?.label : placeholder}
        </Text>
      </TouchableOpacity>

      {/* Modal for Dropdown */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Search Input */}
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={search}
              onChangeText={setSearch}
            />

            {/* Dropdown List */}
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setValue(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />

            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default memo(SingleSelect);
