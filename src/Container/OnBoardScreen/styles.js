import {Platform, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  icon: {width: 144, height: 83},
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,67,24,0.9)',
    width: '100%',
    height: '100%',
  },
  title: {
    paddingTop: 22,
    textAlign: 'center',
    fontSize: 36,
    color: 'white',
    paddingBottom: 79,
  },
  button: {
    borderRadius: 20,
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  textButton: {
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
});
