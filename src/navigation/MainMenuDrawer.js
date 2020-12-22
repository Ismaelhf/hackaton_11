import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import MenuDrawer from '../componenst/core/Menu/MenuDrawer';
import MainMenuTab from './MainMenuTab';

import Home from '../screen/Home';
import Welcome from '../screen/Welcome';
import Info from '../screen/Info';
import Favorite from '../screen/Favorite';
import Item from '../screen/Item';
import Maps from '../screen/Maps';

const Drawer = createDrawerNavigator();

const MainMenuDrawer = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Welcome"
      drawerContent={(parameters) => <MenuDrawer {...parameters} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Maps" component={Maps} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default MainMenuDrawer;
