import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, } from "react-native";
import React, { memo, useState } from "react";

import { data } from "../../constants/constant";
import styles from "./multiSelector.style"; // Import styles
import Button from "../button/Button";
import Input from "../input/Input";


// Import styles


// Import styles


const MultiSelect = ({ placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);

  // Filter search results
  const filteredOptions = data.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle selection
  const toggleSelection = (item) => {
    setSelectedValues((prevSelected) =>
      prevSelected.includes(item.value)
        ? prevSelected.filter((val) => val !== item.value)
        : [...prevSelected, item.value]
    );
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Button */}
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
        <Text style={selectedValues.length > 0 && styles.selectedText}>
          {selectedValues.length > 0
            ? selectedValues.map((val) => data.find((item) => item.value === val)?.label).join(", ")
            : placeholder}
        </Text>
      </TouchableOpacity>

      {/* Modal for Dropdown */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Search Input */}
            <Input
              placeholder="Search..."
              style={styles.searchInput}
              value={search}
              onChange={setSearch}
            />

            {/* List of Items */}
            <FlatList
              data={filteredOptions}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => {
                const isSelected = selectedValues.includes(item.value);
                return (
                  <TouchableOpacity
                    style={[styles.item, isSelected && styles.selectedItem]}
                    onPress={() => toggleSelection(item)}
                  >
                    <Text>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />

            {/* Close Button */}
            <Button style={styles.closeButton} onPress={() => setModalVisible(false)} text="Close"/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default memo(MultiSelect);
