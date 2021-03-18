import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import defaultstyles from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {product} = this.props;
    return (
      <View style={defaultstyles.container}>
        <View style={defaultstyles.imageContainer}>
          <Image style={defaultstyles.image} source={{uri: product.image}} />
        </View>
        <Text style={defaultstyles.title}>{product.title}</Text>
        <Text style={defaultstyles.subtitle}>{product.number}</Text>
        <View style={defaultstyles.priceContainer}>
          <Text style={defaultstyles.priceText}>{product.price}</Text>
          <TouchableOpacity style={defaultstyles.plusButton}>
            <Icon name="plus" size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};
