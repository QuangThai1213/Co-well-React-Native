import React, {Component} from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={{
            uri:
              'https://s3-alpha-sig.figma.com/img/3474/e1a3/d002b73c97a78929f717781d27218f9c?Expires=1616976000&Signature=AWPm8thiecBxVDWQb86mO1CsVI6B2nQHGSLpv9Mklzqk261shYhNheSyQOaGRekYwLIvqhXgQrma3RehS5dyN-zfCRhoASd-hPDCaCDWwVDVqCM3O1j1ow48gFHYOIbgyTCAaxLC1EJmFoCRXLSPkodrMNWXtPr0jqzBElkcsdtcbdvQETnwVUODdTnitI0SWl8YGc1dLd18bEHeFJcPQxp-cpNVqedMRkPZ~i-sKHZArj9Y8klRHFcZf2amIjQuqMdJM71oKHQ8NSvXTAPYCsxpy7kLVi2pUYEqGfr~WCBZDg5yuffShL7sodIcuMvuljDdJwQ5A7-nf0~k9f8kmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/c695/133d/68d1c62a0bda84ca43a4562895559e0d?Expires=1616976000&Signature=gCGVFyG0ueYGFZxduNa2Lzpo1Q5xcShXhfscJACoJx7URi9DivE81ZrtaPA6cr4kC0wxfQJeN8ZGAAfMS615953zNO7ndr-6DQFZ6vtqzPHoil3I~2uxuhARSEwH3jE0G6k68rDIZGn45VPixTPrhkmag8FsBe1HMBKfBllURvIDdQw4oq9mTTF7zamIVPKK3Mxqoh5Dl2wnU-2VMjjuGupwdpibQA9wowNcHopL9CI-cdwapcm1LxkfMvByfBk5lNV4dQ-NE91P1blH1FD54ofZCKRTM7SMN~KRbyMeKBCjmUXLvAMUb~TGLeHzp2mK3WVgpl7OcWCIvQjdLiDILg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  logo: {
    width: 161,
    height: 93,
  },
});
