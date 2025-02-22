import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import labels from '../../assets/labels/English.labels';
import globalStyle from '../../assets/styles';
import Button from '../../components/button/Button';
import HaveAnAccount from '../../components/haveAnAccount/HaveAnAccount';
import Input from '../../components/input/Input';
import styles from './Login.style';
import {images} from '../../config/Images';
import {keyboardTypes} from '../../constants/KeyboardTypes.constants';
import colors from '../../config/Colors';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const handleNavigation = () => {};

  const handleBoolState = state => setState => () => {
    setState(!state);
  };

  const handleState = setState => event => {
    setState(event);
  };

  const loginMethod = () => {
    navigation.navigate('AppStack', {screen: 'Home'});
  };

  return (
    <View style={[styles.container, globalStyle.appPHStyle]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.title}>{labels.login}</Text>
        <Input
          placeholder={labels.emailAddress}
          value={email}
          onChange={handleState(setEmail)}
          keyboardType={keyboardTypes.emailAddress}
        />
        <Input
          placeholder={labels.loginPin}
          value={loginPin}
          secureTextEntry={secureEntry}
          onChange={handleState(setLoginPin)}
          rightIcon={images.eyeOff}
          pressOnRightIcon={handleBoolState(secureEntry)(setSecureEntry)}
        />
        <Text style={styles.forgotText()}>
          {labels.forgotPin}
          <Text style={[styles.forgotText(colors.themeColor)]}>
            {labels.reset}
          </Text>
        </Text>
        <Button text={labels.login} onPress={loginMethod} />
        <HaveAnAccount
          text1={labels.dontHaveAnAccount}
          text2={labels.signUp}
          onPress={handleNavigation}
        />
      </ScrollView>
    </View>
  );
};

export default Login;
