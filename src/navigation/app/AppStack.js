/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/splash/Splash';
import {appRoutes} from './AppRoutes';

const HomeStack = createNativeStackNavigator();

const routes = appRoutes;

const AppStack = () => {
  return (
    <HomeStack.Navigator initialRouteName={routes[0]?.name}>
      {routes.map((data, index) => {
        return (
          <HomeStack.Screen
            key={index}
            options={{headerShown: false}}
            name={data?.name}
            component={data?.component}
          />
        );
      })}
    </HomeStack.Navigator>
  );
};

export default AppStack;
