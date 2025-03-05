import WelcomeScreen from '../../screens/welcomeToChefzoner/welcomeScreen';
import Splash from '../../screens/splash/Splash';
import SignUp from '../../screens/signUp/signUp';
import Login from '../../screens/login/Login';
import Intro from '../../screens/intro/intro';


export const authRoutes = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'Intro',
    component: Intro,
  },
  {
    name: 'WelcomeScreen',
    component: WelcomeScreen,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
];
