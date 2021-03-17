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
    borderRadius: 20,
    backgroundColor: '#fff',
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
  separator: {
    width: 0.5,
    height: 20,
    backgroundColor: '#ccc',
  },
});
