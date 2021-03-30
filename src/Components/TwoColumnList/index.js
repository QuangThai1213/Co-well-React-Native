/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {CategoriesItem} from '@Components';
import PropTypes from 'prop-types';
export default class TwoColumnList extends Component {
  renderItem(item, index) {
    if (this.props.type === 'category') {
      return (
        <CategoriesItem
          image={item.image}
          title={item.title}
          borderColor={item.borderColor}
          backgroundColor={item.backgroundColor}
        />
      );
    }
  }
  render() {
    return (
      <FlatList
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 15,
        }}
        numColumns={2}
        data={this.props.data}
        renderItem={({item, index}) => this.renderItem(item, index)}
      />
    );
  }
}

TwoColumnList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
