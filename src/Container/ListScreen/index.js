import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles.js';
import {TopBar} from '@Components';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class ListScreen extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <TopBar mid="Tìm kiếm sản phẩm" />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
