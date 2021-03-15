import * as React from 'react';
import {View, StyleSheet, Button, StatusBar} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.sectionContainer}>
        <Button
          title="Splash Screen"
          onPress={() => {
            navigation.navigate('Splash');
          }}
        />
        <Button
          title="On Board Screen"
          onPress={() => {
            navigation.navigate('OnBoard');
          }}
        />
        <Button
          title="Login Screen"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
