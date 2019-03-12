import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './container/home/home';

const HomeStack = createStackNavigator({ Home });

export default Navigation = createAppContainer(createSwitchNavigator(
  {
    Home: HomeStack,

  },
  {
    initialRouteName: 'Home'
  }
));
