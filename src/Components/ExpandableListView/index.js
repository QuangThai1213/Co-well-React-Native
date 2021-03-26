import React, {Component} from 'react';

import {View, FlatList} from 'react-native';

import ExpandableListViewItem from './ExpanableListViewItem';
import styles from './styles.js';

export default class ExpandableListView extends Component {
  render() {
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
