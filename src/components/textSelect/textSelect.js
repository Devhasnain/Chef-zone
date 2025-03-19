import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

import { rolesData } from "../../constants/constant";
import { images } from "../../config/Images";
import colors from "../../config/Colors";
import styles from "./TextSelect.style";
import Label from "../../config/Label";
import Title from "../title/Title";


const TextSelect = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const toggleSelection = (id) => {
    setSelectedRoles((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((roleId) => roleId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Title heading={Label.whatCanYouDo} />
      {rolesData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.roleContainer,
            selectedRoles.includes(item.id) && !item.disabled && styles.selectedRole,
          ]}
          onPress={() => toggleSelection(item.id)}
        >
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={styles.roleText}>{item.name}</Text>
          {selectedRoles.includes(item.id) && (
            <Icon name="check-circle" size={25} color={colors.primary} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TextSelect;
