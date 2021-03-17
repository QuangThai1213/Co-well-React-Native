import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ProductItem} from '@Components';
import defaultstyles from './styles';
import PropTypes from 'prop-types';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Chuối Úc',
    number: '7 trái',
    image:
      'https://s3-alpha-sig.figma.com/img/cdd4/9d63/a82af5cf4cfd7f408c9a57cd24bf47c9?Expires=1616976000&Signature=Gbkx-IcvyKG~FbYuLobSk~nxbEavlN1fL0PbwfgLADlbv7F7Ffj0taIbXaZC1zZg3IFwrUofkafNF4G1Ep2r1ceag1EcTd8jX~CnSytc~G6GfvZ-HvSMYOVHRb0vigq9NIbvBXsEIq40x8jntfBml6IO7OFnznu2ESVVrvLUjmX2vj98DDe4rmiiXG4ha4DXyxpUP1ggyNpaF8UPnRgcuauDqI7AJJ~l-D~tbI53~FZ~Wf1NUEoh0A0B0J7mmBr1zfg7cwMVCKVScSMFDBRTD39bHeo1rzR6Z65izZNgiO2bwyBjF7B5dMGhPu6JR4LQT9MXbSnRDql6JJRlxvxO6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Táo Mỹ',
    number: '1 kg',
    image:
      'https://s3-alpha-sig.figma.com/img/6d40/7598/44b904ac6bd89983c94017f04290b676?Expires=1616976000&Signature=e6NwVymVMs3s93AamxeUsdh6nUUHzCH8hXDKpgTBvpp6MsFCxXRu-W7km5TlkOewWTUcZ8xYFRfbIUdd4tmLDU6jXdF4yfSXdA1h6hnRpzqgDu2QkJ5AxlXCWGyfw6tbd3zaUsazyc4pUS4HEW5ZAquIkbgm~ZMFX-m8IEtYyNPmet~6NZ5WmRpWK7HYL2-a-XjchHfLGxy65QxUoBYAmWNo-CKu7jISBJRqqZVZaKdnycsBO5AmiCUMA97MNrDq3l64aSfJl~OMctwq7hiSskBf2Qh--v14xXm9ZWlsD3HmeaK1a47PP6q~aVkzxPViBTkko6cziaYY8ohgjYKKvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    number: '1 kg',
    image:
      'https://s3-alpha-sig.figma.com/img/cdd4/9d63/a82af5cf4cfd7f408c9a57cd24bf47c9?Expires=1616976000&Signature=Gbkx-IcvyKG~FbYuLobSk~nxbEavlN1fL0PbwfgLADlbv7F7Ffj0taIbXaZC1zZg3IFwrUofkafNF4G1Ep2r1ceag1EcTd8jX~CnSytc~G6GfvZ-HvSMYOVHRb0vigq9NIbvBXsEIq40x8jntfBml6IO7OFnznu2ESVVrvLUjmX2vj98DDe4rmiiXG4ha4DXyxpUP1ggyNpaF8UPnRgcuauDqI7AJJ~l-D~tbI53~FZ~Wf1NUEoh0A0B0J7mmBr1zfg7cwMVCKVScSMFDBRTD39bHeo1rzR6Z65izZNgiO2bwyBjF7B5dMGhPu6JR4LQT9MXbSnRDql6JJRlxvxO6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

export default class HorizontalListItem extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = (item) => <ProductItem product={item} />;

  render() {
    return (
      <FlatList
        style={{paddingLeft: 10}}
        horizontal={true}
        data={DATA}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}
