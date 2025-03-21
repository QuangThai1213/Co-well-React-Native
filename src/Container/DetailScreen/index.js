/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
// import TopBar from './TopBar';
import {ExpandableListView, TopBar} from '@Components';
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
            <TopBar
              navigation={navigation}
              left={{name: 'arrow-left'}}
              right={{name: 'arrow-left'}}
            />
            <View style={{alignItems: 'center'}}>
              <Image style={styles.image} source={{uri: product.image}} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={{fontSize: 24}}>{product.title}</Text>
              <Icon name="heart" size={30} color={'rgba(184,38,39,1)'} />
            </View>
            <Text style={styles.subTitle}>{product.number}</Text>
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
                  paddingTop: 31,
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
                <View style={styles.count}>
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
                {
                  title: 'Thông tin sản phẩm',
                  description:
                    'Táo rất bổ dưỡng. Táo có thể tốt cho việc giảm cân. táo có thể tốt cho tim của bạn. Là một phần của chế độ ăn uống lành mạnh và đa dạng. Táo rất bổ dưỡng. Táo có thể tốt cho việc giảm cân.',
                },
                {title: 'Dinh dưỡng', description: 'OKOK', subTitle: '100g'},
                {title: 'Đánh giá', description: 'OKOK', star: 5},
              ]}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize: 20, paddingVertical: 10, color: 'white'}}>
                Thêm vào giỏ hàng
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
