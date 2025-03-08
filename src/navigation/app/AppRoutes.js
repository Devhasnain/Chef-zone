import WelcomeScreen from '../../screens/welcomeToChefzoner/welcomeScreen';
import Splash from '../../screens/splash/Splash';
import CVLive from '../../screens/cvLive/cvLive';
import Intro from '../../screens/intro/intro';
import Home from '../../screens/home/Home';


export const appRoutes = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'CVLive',
    component: CVLive,
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
    name: 'Home',
    component: Home,
  },
];
