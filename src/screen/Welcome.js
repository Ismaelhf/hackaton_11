import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MainMenuTab from '../navigation/MainMenuTab';
import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  //   const item = route.params.item.item;
  // console.warn(item.title);
  return (
    <>
      <View style={styles.body}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri:
                'https://st.depositphotos.com/2251265/2414/i/600/depositphotos_24142557-stock-photo-black-textured-background.jpg',
            }}
          />
        </View>
        <View style={styles.textView}>
          <View>
            <Text style={styles.textTitle}>Hackaton 11</Text>
            <Text style={styles.textDes}>App map and zoom</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <MainMenuTab navigation={navigation} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EEE2CA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: width,
    height: height,
  },
  button: {
    backgroundColor: '#D41D60',
    width: 150,
    height: 45,
    borderRadius: 55,
    marginTop: 65,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 6,
  },
  textView: {
    position: 'absolute',
    alignItems: 'center',
  },
  textTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
  },
  textDes: {
    color: '#595E71',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Welcome;
