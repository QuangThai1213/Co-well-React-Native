/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from './TopBar';
export default class DetailScreen extends Component {
  render() {
    let product = this.props.route.params;
    console.log(product);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView>
          <SafeAreaView>
            <TopBar />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
