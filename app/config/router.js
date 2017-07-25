import React from 'react';
import { TabNavigator, StackNavigator,TabBarBottom } from 'react-navigation';
import Sc1 from '../screens/sc1';
import Sc2 from '../screens/sc2';
import Sc3 from '../screens/sc3';

export const LoginNavStack = StackNavigator({
  Sc1: {
    screen: Sc1
  },
  Sc3: {
    screen: Sc3,
  },
  Sc2: {
   screen: Sc2,
 },

});
