import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#EEE2CA',
  },
  contentDrawer: {
    flex: 1,
  },
  userInfo: {
    marginLeft: 20,
  },
  image: {
    width: 36,
    height: 36,
  },
});

const MenuDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.contentDrawer}>
          <View style={styles.userInfo} />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../resource/static/images/icons/020-phone.png')}
              />
            )}
            label="Gallery"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../resource/static/images/icons/034-search.png')}
              />
            )}
            label="Maps"
            onPress={() => {
              props.navigation.navigate('Maps');
            }}
          />
          <DrawerItem
            icon={() => (
              <Image
                style={styles.image}
                source={require('../../../resource/static/images/icons/024-sell.png')}
              />
            )}
            label="Welcome"
            onPress={() => {
              props.navigation.navigate('Welcome');
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
