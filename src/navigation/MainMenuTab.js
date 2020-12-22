import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
} from 'react-native';
// import {
//   windowWidth,
//   windowHeight,
// } from '../../../resource/functions/Dimensions';

import {Dimensions} from 'react-native';
import Info from '../screen/Info';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#DADADA',
    backgroundColor: '#F9f9f9',
    paddingBottom: 0,
  },
  title: {
    color: '#212121',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonFooter: {
    width: windowWidth / 3,
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  image: {
    height: 36,
    width: 36,
  },
});

const MenuFooter = ({navigation}) => {
  //   const onPressMenuFooter = (route) => {
  //     if (route === 'Dashboard') {
  //       DeviceEventEmitter.emit('eventDashboard', true);
  //     }
  //     if (route === 'ShoppingCart') {
  //       DeviceEventEmitter.emit('eventShoppingCart', true);
  //     }
  //     // if (route === 'Locations') {
  //     //   DeviceEventEmitter.emit('eventLocations', true);
  //     // }
  //     navigation.navigate(route);
  //   };
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <View style={styles.buttonFooter}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.image}
              source={require('../resource/static/images/icons/020-phone.png')}
            />
            <Text style={styles.title}>Gallery</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.buttonFooter}>
          <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
            <Image
              style={styles.image}
              source={require('../resource/static/images/icons/034-search.png')}
            />
            <Text style={styles.title}>Maps</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.buttonFooter}>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Image
              style={styles.image}
              source={require('../resource/static/images/icons/001-address.png')}
            />
            <Text style={styles.title}>Welcome</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuFooter;
