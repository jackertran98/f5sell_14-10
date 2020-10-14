import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker, ScrollView, RefreshControl } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { sizeHeight, sizeWidth, sizeFont } from '../../../../utils/helper/size.helper';
import { connect } from 'react-redux';
var numeral = require("numeral");
import Loading from '../../../../components/loading';
import IconComponets from "../../../../components/icon";

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }
    render() {
        const { loading } = this.state;
        return (
            <View>
                <View>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => this.props.navigation.navigate("reportall")}
                    >
                        <Text style={styles.text}>Báo cáo chung</Text>
                        <IconComponets
                            name="chevron-right"
                            size={sizeFont(5)}
                            color={"#999"}
                        />
                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => this.setState({ loading: !loading })}
                    >
                        <Text style={styles.text}>Thống kê theo mặt hàng</Text>
                        {loading?<IconComponets
                            name="chevron-right"
                            size={sizeFont(5)}
                            color={"#999"}
                        />:<IconComponets
                        name="chevron-down"
                        size={sizeFont(5)}
                        color={"#999"}
                    />}
                    </TouchableOpacity>

                    {loading ? null : <View style={{
                        paddingLeft: sizeWidth(10), borderBottomColor: "#ddd",
                        borderBottomWidth: 1
                    }}>
                        <View>

                            <TouchableOpacity
                                style={styles.bar}
                                onPress={() => this.props.navigation.navigate("reportTime")}
                            >
                                <Text style={styles.text}>Thống kê theo khoảng thời gian</Text>
                                <IconComponets
                                    name="chevron-right"
                                    size={sizeFont(5)}
                                    color={"#999"}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>

                            <TouchableOpacity
                                style={styles.bar}
                                onPress={() => {
                                    this.props.navigation.navigate("reportProduct")
                                }}
                            >
                                <Text style={styles.text}>Thống kê biến động</Text>
                                <IconComponets
                                    name="chevron-right"
                                    size={sizeFont(5)}
                                    color={"#999"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>}
                </View>
                <View>


                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => {
                            this.props.navigation.navigate("reportCTV")
                        }}
                    >
                        <Text style={styles.text}>Thống kê theo CTV </Text>
                        <IconComponets
                            name="chevron-right"
                            size={sizeFont(5)}
                            color={"#999"}
                        />
                    </TouchableOpacity>
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
    touch: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        paddingVertical: sizeHeight(2),
        paddingHorizontal: sizeWidth(2.5),
        paddingLeft: sizeWidth(5),
    },
    bar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: sizeHeight(2),
        paddingHorizontal: sizeWidth(2.5),
        paddingLeft: sizeWidth(5),
    },
    text: {
        fontSize: sizeFont(4),
    },
})

export default connect(
    mapStateToProps,
    null
)(index);
