import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import ImageSizeModal from '../componenst/ImageSizeModal';
import {data} from '../resource/database/imageSizeModalData';

const {height, width} = Dimensions.get('window');

export default class Home extends Component {
  state = {
    showLargeImage: false,
    imageSource: '',
    selectedIndex: null,
  };

  showLargeImage({pageX, pageY, locationX, locationY}, source, index) {
    const topLeftX = pageX - locationX;
    const topLeftY = pageY - locationY;
    this.setState({
      topLeftX,
      topLeftY,
      showLargeImage: true,
      imageSource: source,
      selectedIndex: index,
    });
  }

  hideImage() {
    this.setState({showLargeImage: false, selectedIndex: null});
  }

  render() {
    return (
      <>
        <Text style={styles.title}>Your Gallery</Text>
        <View style={styles.conteiner}>
          {data.map((source, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={(e) => {
                  let nE = e.nativeEvent;
                  this.showLargeImage(nE, source, index);
                }}
                style={styles.btnImg}>
                <View style={styles.ViewImg}>
                  <Image
                    source={{uri: source}}
                    style={{
                      // flex: 1,
                      width: '100%',
                      height: 100,
                      opacity: this.state.selectedIndex == index ? 0 : 1,
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
          {this.state.showLargeImage && (
            <ImageSizeModal
              simpleHide={this.state.simpleHide}
              hideStyle={this.state.slideDownFade}
              source={this.state.imageSource}
              hideImage={this.hideImage.bind(this)}
              topLeftX={this.state.topLeftX}
              topLeftY={this.state.topLeftY}
            />
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conteiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btnImg: {
    width: width / 3,
    alignSelf: 'center',
  },
  ViewImg: {
    margin: 5,
  },
});
