import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 15,
    paddingBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 33,
    paddingTop: 25,
    paddingBottom: 15,
  },
  image: {
    width: 100,
    height: 80,
  },
  title: {marginLeft: 15, color: 'rgba(24,23,37,1)', fontSize: 18},
  subtitle: {marginLeft: 15, color: 'rgba(124,124,124,1)', fontSize: 14},
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 13,
    paddingTop: 20,
  },
  priceText: {fontSize: 18},
  plusButton: {
    height: 45,
    width: 45,
    backgroundColor: 'rgba(83,177,117,1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});
