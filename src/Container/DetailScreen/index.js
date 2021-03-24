/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from './TopBar';
import {ExpandableListView} from '@Components';
export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }
  render() {
    let product = this.props.route.params.product;
    const {navigation} = this.props;
    let count = this.state.count;
    return (
      <View>
        <ScrollView>
          <SafeAreaView>
            <TopBar navigation={navigation} />
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  height: 200,
                  width: 330,
                  paddingHorizontal: 40,
                  paddingTop: 20,
                  resizeMode: 'contain',
                }}
                source={{uri: product.image}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
                paddingTop: 90,
              }}>
              <Text style={{fontSize: 24}}>{product.title}</Text>
              <Icon name="heart" size={30} color={'rgba(184,38,39,1)'} />
            </View>
            <Text
              style={{
                paddingHorizontal: 25,
                fontSize: 16,
                color: 'rgba(124,124,124,1)',
              }}>
              {product.number}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="minus"
                  size={30}
                  color={'rgba(179,179,179,1)'}
                  onPress={() => {
                    if (count-- > 0) {
                      this.setState({
                        count: count--,
                      });
                    }
                  }}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 17,
                    borderColor: 'rgba(255,255,255,1)',
                    width: 45,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 20,
                  }}>
                  <Text>{count}</Text>
                </View>
                <Icon
                  name="plus"
                  size={30}
                  color={'rgba(0,67,24,1)'}
                  onPress={() => {
                    this.setState({
                      count: count + 1,
                    });
                  }}
                />
              </View>
              <Text style={{fontSize: 24}}>
                {product.price * count}
                {product.unit}
              </Text>
            </View>
            <ExpandableListView
              data={[
                '1',
                '2',
                '3',
                '3',
                '3',
                '3',
                '3',
                '3',
                '3',
                '3',
                '3',
                '3',
              ]}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
