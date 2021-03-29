/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import styles from './styles.js';
import {SearchBar, TopBar, TwoColumnList} from '@Components';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <TopBar mid="Tìm kiếm sản phẩm" />
          <SearchBar
            placeholder="Tìm kiếm...."
            value={this.state.value}
            onClear={() => {
              this.setState({value: ''});
            }}
            onChangeText={(text) => {
              this.setState({value: text});
            }}
          />
          <TwoColumnList />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
