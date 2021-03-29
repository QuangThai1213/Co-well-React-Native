/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
export default class CategoriesItem extends Component {
  render() {
    const defaultStyles = {
      borderWidth: 1,
      borderColor: 'rgba(83,177,117,1)',
      backgroundColor: 'rgba(83,177,117,0.1)',
      borderRadius: 18,
      paddingHorizontal: 31,
      paddingTop: 28,
      height: 190,
    };
    let customStyles = {
      borderColor: this.props.borderColor,
      backgroundColor: this.props.backgroundColor,
    };
    return (
      <View
        style={{
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 5,
          paddingTop: 15,
        }}>
        <TouchableOpacity
          style={[defaultStyles, customStyles]}
          onPress={() => {
            console.log('okok');
          }}>
          <Image
            style={{
              width: 111,
              height: 74,
            }}
            source={{
              uri: this.props.image,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 20,
              paddingHorizontal: 10,
              lineHeight: 22,
            }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
