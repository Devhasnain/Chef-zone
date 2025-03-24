import ShiftsScreen from '../../screens/business/jobCreate/ShiftScreen';
import ShiftsListing from '../../screens/business/shiftsListing/ShiftsListing';

export const tabRoutes = [
  {
    name: 'ShiftsScreen',
    component: ShiftsListing,
  },
  {
    name: 'Shifts',
    component: ShiftsScreen,
  },
  {
    name: 'Schedule',
    component: ShiftsScreen,
  },
  {
    name: 'Messages',
    component: ShiftsScreen,
  },
  {
    name: 'Profile',
    component: ShiftsScreen,
  },
];
