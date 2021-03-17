/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from '@Components';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                height: 37,
                width: 65,
              }}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/c695/133d/68d1c62a0bda84ca43a4562895559e0d?Expires=1616976000&Signature=gCGVFyG0ueYGFZxduNa2Lzpo1Q5xcShXhfscJACoJx7URi9DivE81ZrtaPA6cr4kC0wxfQJeN8ZGAAfMS615953zNO7ndr-6DQFZ6vtqzPHoil3I~2uxuhARSEwH3jE0G6k68rDIZGn45VPixTPrhkmag8FsBe1HMBKfBllURvIDdQw4oq9mTTF7zamIVPKK3Mxqoh5Dl2wnU-2VMjjuGupwdpibQA9wowNcHopL9CI-cdwapcm1LxkfMvByfBk5lNV4dQ-NE91P1blH1FD54ofZCKRTM7SMN~KRbyMeKBCjmUXLvAMUb~TGLeHzp2mK3WVgpl7OcWCIvQjdLiDILg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 12,
                alignItems: 'center',
              }}>
              <Icon name="map-marker" size={30} color="#900" />
              <Text
                style={{
                  fontSize: 18,
                  color: 'rgba(76,79,77,1)',
                  paddingLeft: 10,
                }}>
                Nam Từ Liêm, Hà nội
              </Text>
            </View>
          </View>
          <SearchBar
            placeholder="Tìm kiếm...."
            value={this.state.value}
            onClear={() => {
              this.setState({value: ''});
            }}
            onChangeText={(text) => {
              this.setState({value: text});
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
