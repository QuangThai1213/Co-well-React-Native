import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
