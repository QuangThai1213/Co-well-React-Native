import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './lib/screens/HomeScreen.js';
import LoginScreen from './lib/screens/LoginScreen.js';
import SplashScreen from './lib/screens/SplashScreen.js';
import OnBoardScreen from './lib/screens/OnBoardScreen.js';
import {SafeAreaView} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{height: '100%', width: '100%'}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          tabBar={() => null}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OnBoard" component={OnBoardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
