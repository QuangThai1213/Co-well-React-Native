import * as React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

export default class TestScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.sectionContainer}>
        <Button
          title="Home Screen"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
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
