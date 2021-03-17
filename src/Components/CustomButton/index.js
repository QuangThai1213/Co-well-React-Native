import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import defaultstyles from './styles';
import PropTypes from 'prop-types';

CustomButton.propTypes = {
  text: PropTypes.string,
  buttonStyle: PropTypes.object,
  textButtonStyle: PropTypes.object,
};

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={this.props.buttonStyle} onPress={this.onPress}>
        <View style={defaultstyles.defaultButton}>
          <Text style={this.props.textButtonStyle}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
