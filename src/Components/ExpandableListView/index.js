/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

import ExpandableListViewItem from './ExpanableListViewItem';

export default class ExpandableListView extends Component {
  render() {
    console.log(this.props.data[0]);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item, index}) => (
            <ExpandableListViewItem item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingHorizontal: 30,
  },
});
