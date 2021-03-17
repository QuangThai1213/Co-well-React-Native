import {Platform, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  top: {backgroundColor: 'white', flex: 1, width: '100%'},
  topImage: {
    width: '100%',
    height: '100%',
    marginTop: '-25%',
    marginLeft: '25%',
    // resizeMode: 'cover',
    transform: [{rotate: '-141.29deg'}],
  },
  bottom: {backgroundColor: 'white', flex: 1, width: '100%'},
  textBottom: {
    fontSize: 26,
    paddingLeft: 25,
  },
  usernameSection: {
    height: 50,
    paddingTop: 30,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loginButtonSection: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nationIcon: {
    paddingTop: 10,
    paddingRight: 25,
    paddingBottom: 10,
    marginLeft: 25,
    width: 33,
    height: 23,
  },
  input: {
    width: '70%',
    height: 40,
    paddingTop: 10,
    paddingRight: 25,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
  buttonGoogle: {
    borderRadius: 20,
    marginTop: 30,
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  textButtonGoogle: {
    color: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  buttonFacebook: {
    borderRadius: 20,
    marginTop: 30,
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(3,24,177,1)',
  },
  textButtonFacebook: {
    color: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});
