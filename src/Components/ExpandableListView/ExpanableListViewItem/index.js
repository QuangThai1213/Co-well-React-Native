/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, LayoutAnimation} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ExpandableListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  onChangeLayout = (fruitName) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: fruitName});
  };
  onPress() {
    if (this.state.expanded === true) {
      this.setState({
        expanded: false,
      });
    } else {
      this.setState({
        expanded: true,
      });
    }
  }
  renderStar(starNumber) {
    let star = [];
    for (let i = 0; i < starNumber; i++) {
      star.push(
        <Icon
          key={i}
          style={{marginRight: 5}}
          name={'star'}
          size={20}
          color={'rgba(243,96,63,1)'}
        />,
      );
    }
    return <View style={{flexDirection: 'row', marginRight: 15}}>{star}</View>;
  }
  render() {
    let item = this.props.item;
    console.log(item.star);
    return (
      <View style={{marginTop: 35}}>
        <TouchableOpacity
          onPress={() => this.onPress()}
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#1EACA8',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {item.subTitle !== null && (
                <Text
                  style={{
                    fontSize: 9,
                    color: 'rgba(124,124,124,1)',
                    marginRight: 15,
                    padding: 4,
                    backgroundColor: 'rgba(235,235,235,1)',
                  }}>
                  {item.subTitle}
                </Text>
              )}
              {item.star !== undefined && this.renderStar(5)}
              <Icon
                name={this.state.expanded === true ? 'minus' : 'plus'}
                size={20}
                color={'black'}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.expanded === true ? null : 0,
            overflow: 'hidden',
          }}>
          <Text style={{fontSize: 13, color: 'rgba(124,124,124,1)'}}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  }
}

// ExpandableListViewItem.propTypes = {
//   navigation: PropTypes.any,
// };
