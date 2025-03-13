import BusinessOnBoarding from '../../screens/business/onBoarding.js/onBoarding';
import SeekerOnBoarding from '../../screens/seeker/onBoarding/onBoarding';
import SignUp from '../../screens/signUp/signUp';
import SignIn from '../../screens/signIn/signIn';


export const authRoutes = [
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'SeekerOnBoarding',
    component: SeekerOnBoarding,
  },
  {
    name: 'BusinessOnBoarding',
    component: BusinessOnBoarding,
  },
];
