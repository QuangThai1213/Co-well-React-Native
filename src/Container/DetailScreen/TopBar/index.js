import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
export default class TopBar extends Component {
  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          size={30}
          color={'black'}
          onPress={() => {
            goBack();
          }}
        />
        <Icon name="shopping-cart" size={30} color={'black'} />
      </View>
    );
  }
}
