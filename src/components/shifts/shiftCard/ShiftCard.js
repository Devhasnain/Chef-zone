import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../config/Colors';
import styles from './ShiftCard.style';
import {images} from '../../../config/Images';
import Badge from '../../badge/Badge';

const ShiftCard = ({
  title = 'Chef de partie',
  description = 'Wimbledon Tennis Championships (London)',
  date = '4d ago',
  price = '22',
  cardBg = '',
}) => {
  const cardBackground =
    cardBg === 'white' ? colors.white : colors.tab_bar_active_color;
  const cardTitleColor =
    cardBg === 'white' ? colors.color_282828 : colors.color_FD9;
  const cardTextColor =
    cardBg === 'white' ? colors.color_5D6365 : colors.color_FD9;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: cardBackground}]}>
      <View style={[styles.cardHeader]}>
        <View style={[styles.imageTitleContainer]}>
          <View style={[styles.imageContainer]}>
            <Image
              source={images?.manager}
              style={[styles.cardCompanyImage]}
              resizeMode="cover"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.cardTitle,
                {
                  color:
                    cardBg === 'white' ? colors.color_282828 : colors.white,
                },
              ]}
              numberOfLines={1}>
              {title}
            </Text>
            <Text
              numberOfLines={2}
              style={[styles.cardDescription, {color: cardTitleColor}]}>
              {description}
            </Text>
          </View>
        </View>

        <FontAwesome
          name={cardBg === 'white' ? 'heart-o' : 'heart'}
          size={20}
          color={cardBg === 'white' ? colors.black : colors.white}
        />
      </View>
      <View style={[styles.badgeDateContainer]}>
        <Badge cardBg={cardBg} />
        <Text style={[{color: cardTextColor}]}>{date}</Text>
      </View>
      <View style={[styles.priceHoursContainer]}>
        <View style={styles.datePriceContainer}>
          <Image source={images.timeSheetImage} style={{width:20,aspectRatio:1,tintColor:cardTextColor,marginBottom:6}} resizeMode='contain' />
          <Text
            numberOfLines={1}
            style={[styles.dateText, {color: cardTextColor}]}>
            30-06-2025 - 2 Shifts
          </Text>
        </View>
        <Text style={[styles.priceText, {color: cardTitleColor}]}>
          £{price}
          <Text style={[styles.hoursText, {color: cardTextColor}]}>/hour</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ShiftCard);
