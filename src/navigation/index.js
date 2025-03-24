import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';

import {navigationRef} from './NavigationService';
import DrawerStack from './drawer/DrawerStack';
import AuthStack from './auth/AuthStack';
import TabStack from './tab/TabStack';
import AppStack from './app/AppStack';
import DrawerContextProvider from '../context/DrawerContext';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <DrawerContextProvider>
      <RootStack.Navigator initialRouteName="AppStack">
        <RootStack.Screen
          options={{headerShown: false}}
          name="AuthStack"
          component={AuthStack}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="TabStack"
          component={TabStack}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="AppStack"
          component={AppStack}
        />
        {/* Incase using Drawer */}
        <RootStack.Screen
          options={{headerShown: false}}
          name="DrawerStack"
          component={DrawerStack}
        />
      </RootStack.Navigator>
    </DrawerContextProvider>
  );
};

const Routes = () => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          // await analytics().logEvent(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
