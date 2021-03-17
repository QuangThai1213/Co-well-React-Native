import {Platform, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  defaultButton: {
    height: 55,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
