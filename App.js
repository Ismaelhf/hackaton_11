import * as React from 'react';
import {Button, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import MainMenuDrawer from './src/navigation/MainMenuDrawer';
import MainMenuTab from './src/navigation/MainMenuTab';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <MainMenuDrawer />
        {/* <MainMenuTab /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
