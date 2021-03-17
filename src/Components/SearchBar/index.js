import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      value,
      onChangeText,
      onSubmitEditing,
      onClear,
      placeholder,
    } = this.props;
    return (
      <View style={styles.container}>
        <Icon name="search" size={20} color={'rgba(24,27,25,1)'} />
        <TextInput
          placeholder={placeholder}
          style={[styles.input]}
          underlineColorAndroid="transparent"
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={onClear}>
            <Icon name="close" />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
};
