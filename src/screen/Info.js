/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MainMenuTab from '../navigation/MainMenuTab';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
// const Stack = createStackNavigator();

const Info = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.body}>
        <Text>info</Text>
      </ScrollView>
      <MainMenuTab navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default Info;
