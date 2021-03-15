import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.top}>
          <Image
            style={styles.topImage}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/f806/f060/4e1b9f8b9d7440c6aff2ea6b09677ca1?Expires=1616976000&Signature=QutcD7D0jOr1pMfn3a5CWnvaKNw3xRL~JzR1mWyIxPCHOvDcpg0bam-HTlWbZJFI8ThPcOtQdf9MxVEVKkHYzDY8pxsIqPqBbt4BoqzrdB0ztOgpOK3slTOoWJUh~SgrJpTyHi39b7p4QUFSRShK7j8ZPhL~bgos6~gLaQHOaO-t02x-x1Dl8vNJcyNhN1NtcrxPuQZpIF4vJJyodrEJuUGXCB7-ZDvVa4TYaqkjR34Fj-hBI6q0VTl42pvZpERldwcK561bH0aclCoZFW~e82IMGgfwkp4LtdoGKpULh7Mm76gFu3LzsX3YqI~w8JVfcBh8N-ygPtqk3k4GTQMMCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
        <View style={styles.bottom}>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.textBottom}>
            Đăng nhập {'\n'}bằng số điện thoại
          </Text>
          <TextInput style={styles.input} value={'asdsad'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
