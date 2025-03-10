import React, { memo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import styles from "./multiSelector.style"; // Import styles
import { data } from "../../constants/constant";

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
        <Text style={styles.selectedText}>
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
            <TextInput
              placeholder="Search..."
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
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
                    <Text style={isSelected ? styles.selectedText : styles.itemText}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />

            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default memo(MultiSelect);
