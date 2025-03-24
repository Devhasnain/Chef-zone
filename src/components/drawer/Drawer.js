import React from 'react';
import {View} from 'react-native';
import styles from './Drawer.style';
import {images} from '../../config/Images';
import globalStyle from '../../assets/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {drawerRoutes} from '../../navigation/drawer/DrawerRoutes';
import DrawerItem from './drawerItem/DrawerItem';
import DrawerHeader from './drawerHeader/DrawerHeader';
import {ScrollView} from 'react-native-gesture-handler';

const Drawer = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, globalStyle.appPHStyle]}>
        <SafeAreaView>
          <DrawerHeader {...props} />
          <View style={styles.navigationContainer}>
            {drawerRoutes.map((data, index) => (
              <DrawerItem data={data} key={index} />
            ))}
            <DrawerItem data={{name: 'Logout', image: images.logoutImage}} />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default React.memo(Drawer);
