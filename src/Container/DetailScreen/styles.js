import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: 200,
    width: 330,
    paddingHorizontal: 40,
    paddingTop: 20,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 90,
  },
  subTitle: {
    paddingHorizontal: 25,
    fontSize: 16,
    color: 'rgba(124,124,124,1)',
  },
  count: {
    borderWidth: 1,
    borderRadius: 17,
    borderColor: 'rgba(255,255,255,1)',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'rgba(83,177,117,1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 25,
    marginBottom: 20,
  },
});
