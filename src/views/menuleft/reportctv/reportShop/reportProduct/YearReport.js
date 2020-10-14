import React, { Component } from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity,
    Image, Picker, ScrollView, RefreshControl
} from 'react-native'
import { sizeHeight, sizeWidth } from '../../../../../utils/helper/size.helper';
import { connect } from 'react-redux';
var numeral = require("numeral");
class index extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            selectedValue: '',
            isselectedValue: '',
            dataFix:['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
            
        }
    }

    handData=()=>{
        var {data}=this.props;
        var fixdata=[];
        for(var i=0;i<data.length;i++){
            
        }
        return fixdata;
    }
    render() {
        const { selectedValue, isselectedValue,dataFix } = this.state;
        const {data}=this.props;
        console.log("this chấm data",data);
        return (
            <ScrollView style={{padding:10}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Số lượng đơn hàng</Text>
                    <View>
                        <ScrollView horizontal={true}>
                            {/* <View style={{ flexDirection: 'column' }}>
                                <View style={[styles.mainUser, styles.custom, styles.customTop]}>
                                    <Text style={styles.row1}>Tháng</Text>
                                    <Text style={styles.row2}>Tên</Text>
                                    <Text style={styles.row3}>Số đơn</Text>
                                    <Text style={styles.row4}>Số lượng</Text>
                                    <Text style={styles.row5}>Doanh thu</Text>
                                </View>
                                <View>
                                    {data.map((val, key) => {
                                        return (
                                            <View style={[styles.mainUser, styles.custom]}>
                                                <Text style={styles.row1}>{val.MONTH}</Text>
                                                <Text style={styles.row2}>{val.NAME}</Text>
                                                <Text style={styles.row3}>{val.TOTAL_ORDER}</Text>
                                                <Text style={styles.row4}>{val.TOTAL_QUANTITY}</Text>
                                                <Text style={styles.row5}>{val.TOTAL_REVENUE}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View> */}
                            {dataFix.map((val,key)=>{
                                return (
                                    <View>
                                        <Text style={styles.row1}>{val}</Text>

                                    </View>
                                )
                            })}
                            {console.log("hey zo",this.handData())}
                        </ScrollView>
                    </View>
                </View>

                {/* <View>
                    <Text style={{fontWeight:'bold'}}>Số lượng sản phẩm</Text>
                    <View>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={[styles.mainUser, styles.custom, styles.customTop]}>
                                    <Text style={styles.row1}>Tháng</Text>
                                    <Text style={styles.row2}>Tên</Text>
                                    <Text style={styles.row3}>Số lượng</Text>
                                </View>
                                <View>
                                    {data.map((val, key) => {
                                        return (
                                            <View style={[styles.mainUser, styles.custom]}>
                                                <Text style={styles.row1}>{val.MONTH}</Text>
                                                <Text style={styles.row2}>{val.NAME}</Text>
                                                <Text style={styles.row3}>{val.TOTAL_QUANTITY}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={{marginBottom:20}}>
                    <Text style={{fontWeight:'bold'}}>Số lượng doanh thu </Text>
                    <View>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={[styles.mainUser, styles.custom, styles.customTop]}>
                                    <Text style={styles.row1}>Tháng</Text>
                                    <Text style={styles.row2}>Tên</Text>
                                    <Text style={styles.row3}>Doanh thu</Text>
                                </View>
                                <View>
                                    {data.map((val, key) => {
                                        return (
                                            <View style={[styles.mainUser, styles.custom]}>
                                                <Text style={styles.row1}>{val.MONTH}</Text>
                                                <Text style={styles.row2}>{val.NAME}</Text>
                                                <Text style={styles.row3}>{val.TOTAL_REVENUE}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View> */}
            </ScrollView>

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
    mainUser: {
        flexDirection: 'row',
    },
    row1: {
        borderLeftColor: '#BFC4C4',
        borderLeftWidth: 1,
        textAlign: 'center',
        width: sizeWidth(30),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    row2: {
        textAlign: 'center',
        width: sizeWidth(30),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    row3: {
        textAlign: 'center',
        width: sizeWidth(30),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    row4: {
        textAlign: 'center',
        width: sizeWidth(30),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    row5: {
        textAlign: 'center',
        width: sizeWidth(30),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    row6: {
        textAlign: 'center',
        width: sizeWidth(30),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    row7: {
        textAlign: 'center',
        width: sizeWidth(20),
        borderRightColor: '#BFC4C4',
        borderRightWidth: 1,
    },
    custom: {
        borderBottomColor: '#BFC4C4',
        borderBottomWidth: 1,

    },
    customTop: {
        borderTopColor: '#BFC4C4',
        borderTopWidth: 1,
    },
    container: {
        borderColor: '#E1AC06',
        borderWidth: 2,
        borderRadius:10,
        alignItems: "center"
    },
})

export default connect(
    mapStateToProps,
    null
)(index);
