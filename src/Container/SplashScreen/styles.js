import {Platform, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  logo: {
    width: 161,
    height: 93,
  },
});
