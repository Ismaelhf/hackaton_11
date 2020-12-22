/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MainMenuTab from '../navigation/MainMenuTab';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
// const Stack = createStackNavigator();

const Item = (data) => {
  const dataItem = data.route.params;

  const [count, setCount] = useState(1);
  const [stature, setStature] = useState('S');
  const [colorButton, setColorButton] = useState('#B39764');

  const [color, setColor] = useState('red');
  const [textColor, setTextColor] = useState('white');
  const [price, setPrice] = useState(dataItem.price);

  const fsCount = (count, type) => {
    if (type == '+') {
      setCount(count + 1);
      if (stature == 'S') {
        setPrice(dataItem.price * (count + 1));
        setColorButton(true);
      } else if (stature == 'M') {
        setPrice(dataItem.price * 1.2 * (count + 1));
        setColorButton(true);
      } else if (stature == 'L') {
        setPrice(dataItem.price * 1.4 * (count + 1));
        setColorButton(true);
      }
    }
    if (type == '-') {
      if (count > 0) {
        setCount(count - 1);

        if (stature == 'S') {
          setPrice(dataItem.price * (count - 1));
          setColorButton(true);
        } else if (stature == 'M') {
          setPrice(dataItem.price * 1.2 * (count - 1));
          setColorButton(true);
        } else if (stature == 'L') {
          setPrice(dataItem.price * 1.4 * (count - 1));
          setColorButton(true);
        }
      }
    }
  };

  const fsStature = (stature) => {
    if (stature == 'S') {
      //   console.warn('S');
      setStature('S');
      setPrice(dataItem.price * count);
      setColorButton(true);
    } else if (stature == 'M') {
      //   console.warn('M');
      setStature('M'), setPrice(dataItem.price * 1.2 * count);
      setColorButton(true);
    } else if (stature == 'L') {
      // console.warn('L');
      setStature('L'), setPrice(dataItem.price * 1.4 * count);
      setColorButton(true);
    }
  };
  const fsColorButton = (colorButton) => {};

  //   console.warn(data.route.params);

  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={{marginTop: 15, color: '#fff'}}>Item Detail</Text>

            <Text style={{marginTop: 15, color: '#fff', fontSize: 15}}>
              {dataItem.title}
            </Text>
            <Text style={{marginTop: 10, fontSize: 25}}>${price}</Text>

            <View style={styles.content}>
              <View style={styles.contentMedidas}>
                <View style={styles.measure}>
                  <TouchableOpacity
                    onPress={() => fsStature('S')}
                    styles={{
                      backgroundColor: 'red',
                    }}>
                    <Text style={styles.textMedidas}>S</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.measure}>
                  <TouchableOpacity
                    onPress={() => {
                      fsStature('M');
                      setColorButton('red');
                    }}>
                    <Text style={styles.textMedidas}>M</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.measure}>
                  <TouchableOpacity onPress={() => fsStature('L')}>
                    <Text style={styles.textMedidas}>L</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Image
                  style={styles.img}
                  source={{
                    uri: dataItem.image,
                  }}
                />
              </View>
            </View>

            <View style={styles.contentCount}>
              <View style={styles.count}>
                <TouchableOpacity onPress={() => fsCount(count, '-')}>
                  <Text style={styles.textMedidas}>-</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.textCount}>{count}</Text>
              <View style={styles.count}>
                <TouchableOpacity onPress={() => fsCount(count, '+')}>
                  <Text style={styles.textMedidas}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btnAdd}>
              <TouchableOpacity>
                <Text style={styles.textbtn}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: '#8F7950',
  },
  container: {
    flex: 1,
    margin: 25,
    backgroundColor: '#F2CD88',
    borderColor: '#F2CD88',
    borderRadius: 25,
    borderWidth: 1,
  },
  container2: {
    flex: 1,
    margin: 15,
    padding: 15,
    backgroundColor: '#B39764',
    borderColor: '#B39764',
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    marginTop: 35,
  },
  contentMedidas: {
    marginRight: 25,
    justifyContent: 'center',
  },
  textMedidas: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 150,
    height: 250,
  },
  measure: {
    borderWidth: 1,
    borderRadius: 8,
    width: 35,
    marginVertical: 15,
    borderColor: '#fff',
  },
  colorButton: {
    backgroundColor: '#000',
  },
  contentCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  count: {
    borderWidth: 1,
    borderRadius: 18,
    width: 35,
    marginVertical: 15,
    borderColor: '#fff',
  },
  textCount: {
    marginHorizontal: 15,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnAdd: {
    borderWidth: 1,
    borderRadius: 15,
    width: 150,
    marginVertical: 15,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  textbtn: {
    color: '#B39764',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default Item;
