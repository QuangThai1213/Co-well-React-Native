/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {CategoriesItem, ProductItem} from '@Components';
import PropTypes from 'prop-types';
export default class TwoColumnList extends Component {
  renderItem(item, index, navigation) {
    if (this.props.type === 'category') {
      return (
        <CategoriesItem
          onPress={() => {
            navigation.navigate('Item');
          }}
          image={item.image}
          title={item.title}
          borderColor={item.borderColor}
          backgroundColor={item.backgroundColor}
        />
      );
    }
    if (this.props.type === 'item') {
      return (
        <ProductItem
          product={item}
          navigation={navigation}
          customStyle={{width: '50%'}}
        />
      );
    }
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <FlatList
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 15,
        }}
        numColumns={2}
        data={this.props.data}
        renderItem={({item, index}) => this.renderItem(item, index, navigation)}
      />
    );
  }
}

TwoColumnList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
