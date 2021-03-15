import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class OnBoardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={{
            uri:
              'https://s3-alpha-sig.figma.com/img/3474/e1a3/d002b73c97a78929f717781d27218f9c?Expires=1616976000&Signature=AWPm8thiecBxVDWQb86mO1CsVI6B2nQHGSLpv9Mklzqk261shYhNheSyQOaGRekYwLIvqhXgQrma3RehS5dyN-zfCRhoASd-hPDCaCDWwVDVqCM3O1j1ow48gFHYOIbgyTCAaxLC1EJmFoCRXLSPkodrMNWXtPr0jqzBElkcsdtcbdvQETnwVUODdTnitI0SWl8YGc1dLd18bEHeFJcPQxp-cpNVqedMRkPZ~i-sKHZArj9Y8klRHFcZf2amIjQuqMdJM71oKHQ8NSvXTAPYCsxpy7kLVi2pUYEqGfr~WCBZDg5yuffShL7sodIcuMvuljDdJwQ5A7-nf0~k9f8kmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}>
          <View style={styles.overlay}>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/5ad4/936d/fe4ebbdbc8a462e62c18c41765e852dd?Expires=1616976000&Signature=WXmR9Q-3oO0Mod3-dGLG3SMX~SrdITi4ke-Y~KPGMhatjh-b0ELVBESUdUcoY~2onHZzF4eRpSD7mLe-3NTT7J2cFBBbzyjbHEzj0YLgHfWU~84BPmzvWKWYvFmw9addF2OfNxZmWsRwhf0hi847KCFqhblLP~IytTij~zMvfcC3ExVVsTPIscR0~f3vAGMKNZtttvFCHFYJWpuXq85kibPH3CmXzjArmN2eNdAgAedtikdz4dGkgMZUotKIgpKcT340rDDsy2bN1pLYwDOGW1m0c56TWwoa2iLBa7UQJ5mBnkIwXL0in3otppVxa0DZ3d3PfLJ-YmKKE6eZqcRgWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.title}>
              Chào mừng {'\n'}đến với chúng tôi
            </Text>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text style={styles.textButton}>Bắt đầu</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  icon: {width: 144, height: 83},
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,67,24,0.9)',
    width: '100%',
    height: '100%',
  },
  title: {
    paddingTop: 22,
    textAlign: 'center',
    fontSize: 36,
    color: 'white',
    paddingBottom: 79,
  },
  button: {
    borderRadius: 20,
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  textButton: {
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
});
