import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {marginTop: 35},
  subContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 9,
    color: 'rgba(124,124,124,1)',
    marginRight: 15,
    padding: 4,
    backgroundColor: 'rgba(235,235,235,1)',
  },
  leftSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {fontSize: 13, color: 'rgba(124,124,124,1)'},
});
