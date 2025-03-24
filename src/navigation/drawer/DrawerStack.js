/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../components/drawer/Drawer';
import TabStack from '../tab/TabStack';

const DrawersStack = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <DrawersStack.Navigator
      screenOptions={{
        drawerType: 'front',
        swipeEnabled: false,
        drawerStyle: {width: '100%', backgroundColor: 'transparent'},
        overlayColor: 'transparent',
        drawerContentContainerStyle: {backgroundColor: 'transparent'},
      }}
      drawerContent={props => {
        return <Drawer {...props} />;
      }}>
      <DrawersStack.Screen options={{headerShown: false}} name="TabStack">
        {props => <TabStack {...props} />}
      </DrawersStack.Screen>
    </DrawersStack.Navigator>
  );
};

export default DrawerStack;
