import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

import { rolesData } from "../../constants/constant";
import { images } from "../../config/Images";
import colors from "../../config/Colors";
import styles from "./textSelect.style";


const TextSelect = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const toggleSelection = (id) => {
    setSelectedRoles((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((roleId) => roleId !== id)
        : [...prevSelected, id]
    );
  };

  const renderRoleItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.roleContainer,
        selectedRoles.includes(item.id) && !item.disabled && styles.selectedRole,
      ]}
      onPress={() =>  toggleSelection(item.id)}
    >
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.icon} />
      </View>
      <Text style={styles.roleText}>
        {item.name}
      </Text>
      {selectedRoles.includes(item.id)  && (
        <Icon name="check-circle" size={25} color={colors.primary} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What can you do?</Text>
      <FlatList
        data={rolesData}
        renderItem={renderRoleItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TextSelect;
