/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import styles from './styles.js';
import {SearchBar, TopBar, TwoColumnList} from '@Components';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <TopBar mid="Tìm kiếm sản phẩm" />
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
          <TwoColumnList
            type={'category'}
            data={[
              {
                image:
                  'https://s3-alpha-sig.figma.com/img/ca51/c56f/c6c319bfab3990da934ed0eb9c5ae3e7?Expires=1618185600&Signature=MmTXrscuAwuTyrrAnj9SuQo79g0lXxL9hBa4hJ~2QGUzRXy~UnpJYm9QL7tBTvFNkVQ2EEvKMqPIJPeB2VoHHa~D8Gotw9KyT3K-~JGBE0cI~2lxTJn435Qw9Qz~GLs1Kvb4fNtWDws7DFgeTGAIovNOxD5xqsaZNAPxLdviYqVJo17Ca9TFAppgqAiwCSvIauhD9f-1u8C-PdUSAsJmKHw1W65ncFufAqcFalAhytSDUC0vrE2YVkMNjVc1DoDjWVWVqlhLg6YohEJaBnsS2x~g-t6m5xBir4MAkLLenACYBjRMm0m0yis-66OrhQTY8~C479dgtR-jZaD3-piHmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                title: 'Trái cây tươi và Rau',
                borderColor: 'rgba(83,177,117,1)',
                backgroundColor: 'rgba(83,177,117,0.1)',
              },
              {
                image:
                  'https://s3-alpha-sig.figma.com/img/6bc8/dddf/f5d852ef29933852ca183be51838587e?Expires=1618185600&Signature=gf-PL77pv7FfeyJ~MkSRGhpvPrOuh8Gt84TMK-M0OEn79GpPAJJ5AwlSgEbazbFZQxD6cO11m1mK2yXQIDhGK6kNa9bsf87ZAA2R2EoPksJE9ah4Mcb9NysidVq~cawY-B6hgTIYJE2OxMl1Jj0OU9sxv1vddG9Epgs-xyHLtloaj8V0Y-WusEZa96q4FvzxjXxeEzE16lq2HOXiz2et-O6zirw5-gZbCnWlYVIr1odu3NLr6vokczFMCEiZda~YOE6bZ-IX4Oag6Z3ocHq1lm6QT4np9xVKfQPRTUQ8WQvPY8mAAcO2WQzHs-AbLPneqog7Zo~A4auHqLoAwpIyJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                title: 'Dầu ăn và Bơ',
                borderColor: 'rgba(248,164,76,1)',
                backgroundColor: 'rgba(248,164,76,0.1)',
              },
              {
                image:
                  'https://s3-alpha-sig.figma.com/img/22d3/aac2/57974f1aad9e0ec045f5bfc22ef5a6ab?Expires=1618185600&Signature=YPnBcOSu4VWbg9Ljk2fqsIb7UO3U85uqMR5BH5kQF5yLg94wTidP3MJf~6AJZCKGW1gzzdRPoqwP1fEM05iX4Pf5vcq-feQs~nzU2VaH~hq3X44YVk7XoHJzVRQw-RLFGSMJnYhw8XubqNy42llsFqK62zxG0Re5F0VLh3f6oUNxUnRCXLz4~yj-FsdPLXKK7rtdkZbhfAGCSUTPGu3sVGlzCldTgtn~sew3wsWJhHw6jv0ipgPgChBKbLXCofjHE1SDIwbsqYWx0AfJAVI~fvkrUVSGPEbAUUFTiwlBtM4TYs5t15FldTyYy6oWbmtuMyjTonMZofMH1Kq0fk4NXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                title: 'Thịt và cá',
                borderColor: 'rgba(247,165,147,1)',
                backgroundColor: 'rgba(247,165,147,0.1)',
              },
              {
                image:
                  'https://s3-alpha-sig.figma.com/img/e2fa/ac00/a6029bf4a611c1016eaf4b8f75db6d65?Expires=1618185600&Signature=MD9nqWwONK5FSQ9K4Qo7ZTCB9FJtct4RnmZwD2BOdiM2sGEJksdTTHlHaYXrPq8NiFtXkxmO1HaNePcPQjEEp9azC2hvguX~wrh7gRLT8f29uRnxvK~EY9JDRBHykab7c3FAZzD0FEsP3-czLz8UKt6JPSVMpbwhYCxI1spsccVqnydRMDPvezA8JsCLpUpa7JTPvnhV0Xk8ZnJenegnDcIZoJVkmp8fC7WPnr~c8ujrhVJ5WGR8p2JZ0niAH8SuykM4QNrtGg810GPGzJrfRD173TyQFIm3iSd7p4i87nlRjC5MHhs9y855vCO1n5bN-FoElEbz81RjWEenDC1yiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                title: 'Bánh mỳ và Đồ ăn nhẹ',
                borderColor: 'rgba(211,176,224,1)',
                backgroundColor: 'rgba(211,176,224,0.1)',
              },
            ]}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
