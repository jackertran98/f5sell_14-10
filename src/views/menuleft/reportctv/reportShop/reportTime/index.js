import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker, ScrollView, RefreshControl } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { sizeHeight, sizeWidth } from '../../../../../utils/helper/size.helper';
import { connect } from 'react-redux';
import ReportList from './ReportList';
import ReportBook from './ReportBook';
import ReportPr from './ReportPr';
var numeral = require("numeral");
class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: 1,
      startTime: moment()
        .add(-100, "day")
        .format("DD/MM/YYYY"),
      endTime: moment(new Date()).format("DD/MM/YYYY"),
      isDatePickerVisible: false,
      inDateEndPicker: false,
    }
  }
  showDatePicker1 = () => {
    this.setState({
      isDatePickerVisible: true,
    })
  };
  hideDatePicker1 = () => {
    this.setState({
      isDatePickerVisible: false,
    })
  };
  handleConfirm1 = (date) => {
    this.setState({
      startTime: moment(date).format("DD/MM/YYYY")
    })

    this.hideDatePicker1();
  };


  showDatePicker2 = () => {
    this.setState({
      inDateEndPicker: true,
    })
  };
  hideDatePicker2 = () => {
    this.setState({
      inDateEndPicker: false,
    })
  };
  handleConfirm2 = (date) => {
    this.setState({
      endTime: moment(date).format("DD/MM/YYYY")
    })

    this.hideDatePicker2();
  };

  config = (item) => {
    if (item == 1) {
      return (<ReportList item={item} startTime={this.state.startTime} endTime={this.state.endTime} />);
    } else if (item == 3) {
      return <ReportBook item={item} startTime={this.state.startTime} endTime={this.state.endTime} />
    } else if (item = 4) {
      return <ReportPr item={item} startTime={this.state.startTime} endTime={this.state.endTime} />
    }
  }

  render() {
    const { selectedValue } = this.state;
    const { navigation } = this.props;
    return (
      <View >
        <View>
          <View style={{ alignItems: 'center', margin: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Chọn khoảng thời gian</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <View style={styles.confix}>
              <TouchableOpacity
                onPress={this.showDatePicker1}
              >
                <Text style={{fontSize:12}}>Từ ngày</Text>
                <Text style={{fontSize:12}}>{this.state.startTime}</Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode="date"
                onConfirm={this.handleConfirm1}
                onCancel={this.hideDatePicker1}
              />
            </View>

            <Image
              style={{ width: 45, height: 45, marginRight: 40 }}
              source={require('../../../../../assets/images/lich.png')}
            />


            <View style={styles.confix}>
              <TouchableOpacity
                onPress={this.showDatePicker2}
              >
                <Text style={{fontSize:12}}>Đến</Text>
                <Text style={{fontSize:12}}>{this.state.endTime}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={this.state.inDateEndPicker}
                mode="date"
                onConfirm={this.handleConfirm2}
                onCancel={this.hideDatePicker2}
              />
            </View>

            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../../assets/images/lich.png')}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:16}}>Hiển thị theo</Text>
            <View style={{
              borderColor: '#E1AC06',
              borderWidth: 2,
              borderRadius: 15,
              alignItems: "center",
              margin:10,
            }}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 40, width: sizeWidth(55) }}
                onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
              >
                <Picker.Item label="Danh mục sản phẩm" value="1" />
                <Picker.Item label="Theo thuộc tính" value="3" />
                <Picker.Item label="Danh sách sản phẩm" value="4" />
              </Picker>
            </View>
          </View>

        </View>
        <View style={{ height: 4, backgroundColor: '#CCCECE',marginTop:10,marginBottom:10 }}></View>
        <View>
          {this.config(selectedValue)}
        </View>

      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authUser.status,
    authUser: state.authUser.authUser,
    username: state.authUser.username,
  };
};
const styles = StyleSheet.create({
  confix: {
    fontSize: 12,
    borderColor: '#E1AC06',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderRadius: 15,
  },
  confix1: {
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  confix2: {
    borderColor: '#E1AC06',
    borderWidth: 2,
    width: sizeWidth(40),
    height: sizeHeight(7),
    borderRadius: 15,
  },

})

export default connect(
  mapStateToProps,
  null
)(index);
