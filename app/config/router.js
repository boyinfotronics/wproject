import React from 'react';
import { TabNavigator, StackNavigator,TabBarBottom } from 'react-navigation';
import Sc1 from '../screens/sc1';
import Sc2 from '../screens/sc2';

export const LoginNavStack = StackNavigator({
  Sc1: {
    screen: Sc1
  },
  Sc2: {
   screen: Sc2,
 },
});
