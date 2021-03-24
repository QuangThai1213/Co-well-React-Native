/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
export default class ExpandableListViewItem extends Component {
  onChangeLayout = (fruitName) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: fruitName});
  };
  render() {
    let item = this.props.item;
    console.log(this.props.index);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.onChangeLayout(item.fruit_name);
          }}
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1EACA8',
          }}>
          <Text>{this.props.index}</Text>
        </TouchableOpacity>
        <View
          style={{
            height: this.props.expanded === true ? null : 0,
            overflow: 'hidden',
          }}>
          <Text>check</Text>
        </View>
      </View>
    );
  }
}
