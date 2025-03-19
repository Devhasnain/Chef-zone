import React, { useState, useEffect, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../config/Colors";
import styles from "./TextSelect.style";
import Label from "../../config/Label";
import Title from "../title/Title";


const TextSelect = ({ rolesData = [], onSelect, onSingleSelect }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  // Memoize check if role is selected
  const isSelected = useCallback(
    (id) => selectedRoles.includes(id),
    [selectedRoles]
  );

  // Toggle a role's selection — supports single or multi-select mode
  const toggleSelection = useCallback(
    (id) => {
      let updatedSelection;

      if (onSingleSelect) {
        // Single select mode — only one role is selected at a time
        updatedSelection = isSelected(id) ? [] : [id];
        setSelectedRoles(updatedSelection);
        onSingleSelect(id, !isSelected(id)); // Fire single select callback
      } else {
        // Multi-select mode (default behavior)
        updatedSelection = isSelected(id)
          ? selectedRoles.filter((roleId) => roleId !== id)
          : [...selectedRoles, id];
        setSelectedRoles(updatedSelection);
      }
    },
    [selectedRoles, onSingleSelect, isSelected]
  );

  // Notify parent with the full selected roles array whenever it changes
  useEffect(() => {
    if (onSelect && !onSingleSelect) onSelect(selectedRoles);
  }, [selectedRoles, onSelect, onSingleSelect]);

  // Memoize role buttons for better performance
  const renderedRoles = useMemo(
    () =>
      rolesData.length > 0 ? (
        rolesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.roleContainer,
              isSelected(item.id) && !item.disabled && styles.selectedRole,
            ]}
            onPress={() => !item.disabled && toggleSelection(item.id)}
          >
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <Text style={styles.roleText}>{item.name}</Text>
            {isSelected(item.id) && (
              <Icon name="check-circle" size={25} color={colors.primary} />
            )}
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.emptyText}>No roles available</Text>
      ),
    [rolesData, isSelected, toggleSelection]
  );

  return (
    <View style={styles.container}>
      {renderedRoles}
    </View>
  );
};

export default TextSelect;
