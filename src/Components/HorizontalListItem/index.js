import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {ProductItem} from '@Components';
import defaultstyles from './styles';
import PropTypes from 'prop-types';
export default class HorizontalListItem extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = (item) => <ProductItem product={item} />;

  render() {
    return (
      <FlatList
        style={defaultstyles.container}
        horizontal={true}
        data={this.props.data}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

HorizontalListItem.propTypes = {
  data: PropTypes.array.isRequired,
};
