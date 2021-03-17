import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 5,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 15,
    height: 58,
    borderRadius: 15,
    backgroundColor: 'rgba(242,243,242,1)',
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 30,
    fontSize: 17,
    padding: 0,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    margin: 10,
  },
});
