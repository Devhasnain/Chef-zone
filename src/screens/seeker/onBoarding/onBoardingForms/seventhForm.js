import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';

import { policies, videoBannerContent } from '../../../../constants/constant';
import { VideoBanner } from '../../../../components/videoBanner/videoBanner';
import { seventhFormStyle as styles } from "./allForm.style";
import Title from '../../../../components/title/title';
import colors from '../../../../config/Colors';


const SeventhForm = () => {
  const [expanded, setExpanded] = useState(null);
  const [checked, setChecked] = useState([]);

  const toggleItem = (id) => {
    setExpanded(expanded === id ? null : id);
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Title heading={'Conditional shift offer agreements'} paragraph={'Please review and agree to the following'} />
      <View style={styles.policyContainer}>
        {policies.map((policy) => (
          <TouchableOpacity
            key={policy.id}
            onPress={() => toggleItem(policy.id)}
            style={styles.policyItem}>
            <View style={styles.policyContent}>
              <Icon
                name={'check-circle'}
                size={24}
                color={colors.primary}
                style={styles.checkIcon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.policyTitle}>{policy.title}</Text>
                <Text style={styles.policySubtitle}>{policy.subtitle}</Text>
                {expanded === policy.id && (
                  <Text style={styles.policyContentText}>{policy.content}</Text>
                )}
              </View>
            </View>
            <Icon
              name={expanded === policy.id ? 'expand-less' : 'chevron-right'}
              size={24}
              color='#888'
              style={styles.expandIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Title heading={'Conditional shift offer agreements'} />
      {videoBannerContent.map((item, index) => (
        <View key={index}>
          <VideoBanner poster={item.image} name={item.name} />
        </View>
      ))}
    </View>
  );
};



export default SeventhForm;
