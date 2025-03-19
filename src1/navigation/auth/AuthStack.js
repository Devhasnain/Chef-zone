/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from './AuthRoutes';

const AuthenticationStack = createNativeStackNavigator();

const AuthStack = () => {
  const routes = authRoutes;
  console.log(routes[0]?.component, 'skjdfkdsjfksjdkfj');
  return (
    <AuthenticationStack.Navigator initialRouteName={routes[0]?.name}>
      {routes?.map((data, index) => {
        return (
          <AuthenticationStack.Screen
            key={index}
            options={{headerShown: false}}
            name={data?.name}
            component={data?.component}
          />
        );
      })}
    </AuthenticationStack.Navigator>
  );
};

export default AuthStack;
