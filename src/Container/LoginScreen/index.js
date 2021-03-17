/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {CustomButton} from '@Components';
import styles from './styles';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: '',
    };
  }
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
          <View style={styles.usernameSection}>
            <Image
              style={styles.nationIcon}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/81df/8434/ae1b073f18b587f3e1fca950e68a3f6a?Expires=1616976000&Signature=QaBCN7o~nHB0Gx7CVr85QgTCz8Su5pr0TfQrfk-dPyg0jD3FHOC0yTMXjcC8Kdu0HMABgiqoZdv85Pw3X4ofuyFdSxwlLfG6LZkhZsq7wWhj8-qqphNvCYO2YaXasoCf2bhEPzCyqd5NTsPNjrfgKuCEMsI6z3gwUasRoUI7jqVZNxhxF6FSpTBMHvmbV0XyUY43uwnmydu-6-thpH3UlBKPkthulQ2G5RfGf62-DdyyZ8Ld1BiH6iR5qRG7HVn3iuxkVpcLHby0Kq5agzHOVifYQlVXaWoyw6745BGSzlZ8oW49JXlArPzMTLrkaoQQb9c04deFCCwZCDg0t-xfVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <TextInput
              value={this.state.inputString}
              style={styles.input}
              placeholder="+84"
              onChangeText={(inputString) => {
                this.setState({inputString: inputString});
              }}
              underlineColorAndroid="grey"
            />
          </View>
          <View style={styles.loginButtonSection}>
            <Text style={{fontSize: 14, color: 'rgba(130,130,130,1)'}}>
              Đăng ký mới
            </Text>
            <Text style={{fontSize: 14, color: 'rgba(130,130,130,1)'}}>
              Hoặc đăng nhập bằng Google - Facebook
            </Text>
            <CustomButton
              text="Đăng nhập bằng Google"
              buttonStyle={styles.buttonGoogle}
              textButtonStyle={styles.textButtonGoogle}
            />
            <CustomButton
              text="Đăng nhập bằng Google"
              buttonStyle={styles.buttonFacebook}
              textButtonStyle={styles.textButtonFacebook}
            />
          </View>
        </View>
      </View>
    );
  }
}
