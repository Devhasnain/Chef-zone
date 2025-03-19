import { View, Text, TouchableOpacity, Modal, TextInput, FlatList, } from "react-native";
import React, { memo, useState } from "react";

import styles from "./singleSelector.style";
import Button from "../button/Button";
import Input from "../input/Input";


const SingleSelect = ({ placeholder, data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  // Filter options based on search input
  const filteredData = data.filter((item) =>
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
          {value ? data.find((item) => item.value === value)?.label : placeholder}
        </Text>
      </TouchableOpacity>

      {/* Modal for Dropdown */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Search Input */}
            <Input
              style={styles.searchInput}
              placeholder="Search..."
              value={search}
              onChange={setSearch}
            />

            {/* Dropdown List */}
            <FlatList
            showsVerticalScrollIndicator={false}
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
            <Button style={styles.closeButton}
              onPress={() => setModalVisible(false)} 
              text="Close"/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default memo(SingleSelect);
