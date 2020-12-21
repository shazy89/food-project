import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import PracticeScreen from './src/screens/PracticeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Practice: PracticeScreen,
  },
  {
    initialRouteName: 'Practice',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
