/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';
export default class TopBar extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {this.props.left !== undefined ? (
          <Icon
            name={this.props.left.name}
            size={30}
            color={'black'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ) : (
          <View />
        )}
        {this.props.mid !== undefined && (
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}>
            {this.props.mid}
          </Text>
        )}
        {this.props.right !== undefined ? (
          <Icon name="shopping-cart" size={30} color={'black'} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

TopBar.propTypes = {
  navigate: PropTypes.any,
};
