import React, { Component } from "react";
import Share1 from 'react-native-share';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Share,
  Button,
  Clipboard,
  Picker
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import IconComponets from "../../../../components/icon";
import {
  sizeFont,
  sizeWidth,
  sizeHeight,
} from "../../../../utils/helper/size.helper";
import { COLOR } from "../../../../utils/color/colors";
import styles from "../style";
import { connect } from "react-redux";
import { isIphoneX } from "react-native-iphone-x-helper";
import {
  AlertCommon,
  AlertCommonLogin,
  ElementCustom,
} from "../../../../components/error";
import { addToCart } from "../../../../action/orderAction";
import { getDetails } from "../../../../service/products";
import Spinner from "react-native-loading-spinner-overlay";
import HTML from "react-native-render-html";
import { handleMoney } from "../../../../components/money";
import FooterAdmin from "../footeradmin";
import _ from "lodash";
import { IGNORED_TAGS } from "react-native-render-html/src/HTMLUtils";
import { GetProperties } from "../../../../service/order";
var numeral = require("numeral");
const tags = _.without(
  IGNORED_TAGS,
  "table",
  "caption",
  "col",
  "colgroup",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr"
);
const tableDefaultStyle = {
  flex: 1,
  justifyContent: "flex-start",
};
const tableColumnStyle = {
  ...tableDefaultStyle,
  flexDirection: "column",
  alignItems: "center",
};

const tableRowStyle = {
  ...tableDefaultStyle,
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 0.3,
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};
const tdStyle = {
  ...tableDefaultStyle,
  borderRightWidth: 0.5,
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};
const thStyle = {
  ...tdStyle,
  //backgroundColor: "#CCCCCC",
  alignItems: "center",
};
const renderers = {
  table: (x, c) => <View style={tableColumnStyle}>{c}</View>,
  col: (x, c) => <View style={tableColumnStyle}>{c}</View>,
  colgroup: (x, c) => <View style={tableRowStyle}>{c}</View>,
  tbody: (x, c) => <View style={tableColumnStyle}>{c}</View>,
  tfoot: (x, c) => <View style={tableRowStyle}>{c}</View>,
  th: (x, c) => <View style={thStyle}>{c}</View>,
  thead: (x, c) => <View style={tableRowStyle}>{c}</View>,
  caption: (x, c) => <View style={tableColumnStyle}>{c}</View>,
  tr: (x, c) => <View style={tableRowStyle}>{c}</View>,
  td: (x, c) => <View style={tdStyle}>{c}</View>,
};
class DetailProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      activeTab: 1,
      cartLength: this.props.listItem.length,
      loading: true,
      refreshing: false,
      data: [],
      inside: true,
      color1: '#96CD01',
      color: '#F5F5F5',
      properties: '',
      setSelectedValue: '',
    };
    this.arrayImage = [];
    this.refs._carousel;
    //this.activeTab = 1;
  }
  countPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  countNagative = () => {
    if (this.state.count == 1) {
      return;
    } else this.setState({ count: this.state.count - 1 });
  };
  async componentDidMount() {
    const { authUser, navigation, status } = this.props;
    //ID_PRODUCT
    const { ID_PRODUCT } = this.props.route.params;
    await getDetails({
      USERNAME: status === "" ? null : authUser.USERNAME,
      IDSHOP: "ABC123",
      IDPRODUCT: ID_PRODUCT,
    })
      .then((result) => {
        console.log("this is result", result);
        if (result.data.ERROR === "0000") {
          this.setState({ data: result.data.INFO[0] }, () =>
            this.setState({ loading: false })
          );
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
      });

    {
      GetProperties({
        USERNAME: this.props.username,
        LIST_PROPERTIES: this.state.data.ID_PRODUCT_PROPERTIES,
      })
        .then((res) => {
          this.setState({
            properties: res.data.DETAIL
          })
        })
        .catch((err) => { })
    }
    navigation.setParams({
      NAVIGATE: () => null,
    });

  }
  handleTouchBuy = () => {
    const { status, navigation, authUser } = this.props;
    const { count, activeTab, cartLength, loading, data } = this.state;
    if (status == "") {
      return AlertCommonLogin(
        "Thông báo",
        "Vui lòng đăng nhập trước khi đặt hàng",
        () => null,
        () => {
          navigation.popToTop();
          navigation.navigate("signin");
        },
        "Huỷ bỏ",
        "Đăng nhập"
      );
    } else {
      data.COUNT = this.state.count;
      this.props.navigation.navigate("DetailAddressCart", {
        NAME: "DetailProducts",
        item: [data],
        SUM:
          parseInt(handleMoney(status, data, authUser)) *
          parseInt(this.state.count),
      });
    }
  };
  handleTouchAdd = async () => {
    const { count, activeTab, cartLength, loading, data, properties } = this.state;
    const { status, navigation } = this.props;
    if (status == "") {
      return AlertCommonLogin(
        "Thông báo",
        "Vui lòng đăng nhập trước khi đặt hàng",
        () => null,
        () => {
          navigation.popToTop();
          navigation.navigate("signin");
        },
        "Huỷ bỏ",
        "Đăng nhập"
      );
    }
    await this.props.addToCart(data);
    if (cartLength == this.props.listItem.length) {
      AlertCommon("Thông báo", "Sản phẩm đã có trong giỏ hàng", () => null);
    } else {
      AlertCommon(
        "Thông báo",
        "Thêm sản phẩm vào giỏ hàng thành công",
        () => null
      );
      this.setState({
        cartLength: cartLength + 1,
      });
    }
  };
  onShare = async () => {
    var { data } = this.state;
    try {
      const result = await Share.share({
        message: `${data.LINK_AFFILIATE}`,
        url: ''
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  onShareFaceBook = async () => {
    var { data } = this.state;

    try {
      const result = await Share.share({
        message: `${data.CONTENT_FB

          }`,
        url: ''
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  copyIt = () => {
    var { data } = this.state;
    var email = `${data.LINK_AFFILIATE}`;
    Clipboard.setString(email);
  }
  render() {


    const { count, activeTab, cartLength, loading, data, inside, properties, setSelectedValue } = this.state;
    console.log("this is propertis", properties);
    const { status, authUser } = this.props;

    console.log("this is data status", status);
    var color = inside ? "#E1AC06" : "#F5F5F5";
    var color2 = inside ? "#F5F5F5" : "#E1AC06";


    var colorText = inside ? "white" : "#C5C9C9";
    var colorText1 = inside ? "#C5C9C9" : "white";

    var colorBor = inside ? "black" : "#C5C9C9";
    var colorBor1 = inside ? "#C5C9C9" : "black";

    var backGround = inside ? "#149CC6" : "#C6C6C6";
    var backGround1 = inside ? "#C6C6C6" : "#149CC6";
    return loading ? (
      <Spinner
        visible={loading}
        customIndicator={<ElementCustom />}
      // overlayColor="#ddd"
      />
    ) : (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <ScrollView>
            <SliderBox
              images={[data.IMG1, data.IMG2, data.IMG3]}
              dotColor={COLOR.BUTTON}
              resizeMode="contain"
              inactiveDotColor={COLOR.HEADER}
              ImageComponentStyle={{
                height: sizeHeight(25),
              }}
            />
            <View style={{ marginTop: sizeHeight(3) }}>
              <Text
                style={{
                  fontSize: sizeFont(4),
                  marginLeft: sizeWidth(2),
                  paddingBottom: sizeHeight(1),
                  fontWeight: "bold"
                }}
              >
                {data.PRODUCT_NAME}
              </Text>
              <View style={styles.viewChildDetail}>
                <Text style={{ fontSize: sizeFont(4), color: COLOR.BUTTON, fontWeight: "bold" }}>
                  {numeral(handleMoney(status, data, authUser)).format("0,0")} VNĐ
              </Text>
              </View>
              {properties ? <View style={{ paddingLeft: 10, marginTop: 10 }}>
                {properties != [] ? properties.map((val, key) => {
                  return (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>{val.NAME}</Text>
                      <View style={{ borderColor: '#E1AC06', borderWidth: 1, marginLeft: 5, alignItems: 'center',borderRadius:15 }}>
                        <Picker
                          selectedValue={setSelectedValue}
                          style={{ height: 30, width: sizeWidth(40) }}
                          onValueChange={(itemValue) => this.setState({ setSelectedValue: itemValue })}
                        >
                          {properties ? properties.map((val1) => {
                            return (
                              val1.INFO.map((val2) => {
                                return (
                                  <Picker.Item label={val2.SUB_ID} value={val2.SUB_ID} />
                                )
                              })
                            )
                          }) : null}
                        </Picker>
                      </View>
                    </View>
                  )
                }) : null}
              </View> : null}

              <View style={{ paddingLeft: 10, flexDirection: 'row'}}>
                <Image
                  source={require('../../../../assets/images/ship.png')}
                  style={{ width: 45, height: 25 }}
                />
                <TouchableOpacity
                  onPress={() => {

                  }}
                >
                  <Text style={{ fontSize: 17,width:sizeWidth(77) }}>Chính sách vận chuyển:
                  ...........................................................................
                  ............................................</Text>
                  
                </TouchableOpacity>
              </View>
              <View style={{marginTop:10,marginBottom:10}}>
                {status === "" || (status !== "" && authUser.GROUPS !== "3") ? (
                  <SafeAreaView
                    style={{
                      flexDirection: "row",
                      height: isIphoneX() ? sizeHeight(6) : sizeHeight(5),
                    }}
                  >
                    <TouchableOpacity
                      onPress={this.handleTouchAdd}
                      style={styles.touchSafeAddCart}
                    >
                      <IconComponets name="cart-plus" size={sizeFont(5)} color="#fff" />
                      <Text style={{ color: "#fff", marginLeft: sizeWidth(4), textAlign: 'center' }}>
                        Thêm vào giỏ hàng
              </Text>
                    </TouchableOpacity>
                  </SafeAreaView>
                ) : null}
              </View>
              <View style={{ marginTop: sizeHeight(3) }}>
                {activeTab == 1 ? (
                  <View style={{ width: sizeWidth(96), alignSelf: "center" }}>
                    <HTML
                      ignoredTags={tags}
                      html={
                        data.CONTENT_WEB === null
                          ? "<h1>Không có dữ liệu</h1>"
                          : data.CONTENT_WEB
                      }
                      onLinkPress={(event, href) =>
                        console.log("clicked link: ", href)
                      }
                      renderers={renderers}
                      baseFontStyle={{ fontSize: sizeFont(4) }}
                    />
                  </View>
                ) : (
                    <View style={{ width: sizeWidth(96), alignSelf: "center" }}>
                      <HTML
                        ignoredTags={tags}
                        renderers={renderers}
                        html={
                          data.TRAINING === null
                            ? "<h1>Không có dữ liệu</h1>"
                            : data.TRAINING
                        }
                        baseFontStyle={{ fontSize: sizeFont(4) }}
                      />
                    </View>
                  )}
              </View>
            </View>
            {status === "" || authUser.GROUPS == "3"?null:
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TouchableOpacity
                    onPress={() => this.setState({ inside: true })}
                    style={{
                      flexDirection: 'row', width: sizeWidth(45), height: sizeHeight(7.5), backgroundColor: `${color}`,
                      alignItems: 'center', justifyContent: 'center', borderRadius: 5
                    }}
                  >
                    <View style={{
                      borderRightColor: `${colorBor}`, borderRightWidth: 1, height: sizeHeight(7.5), alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {inside === false ? <Image
                        source={require('../../../../assets/images/content.png')}
                        style={{ width: 35, height: 35, marginRight: 5 }}
                      /> : <Image
                          source={require('../../../../assets/images/content_active.png')}
                          style={{ width: 35, height: 35, marginRight: 5 }}
                        />}
                    </View>
                    <Text style={{ color: `${colorText}`, paddingLeft: 5 }}>Nội dung affaliate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setState({ inside: false })}
                    style={{ flexDirection: 'row', width: sizeWidth(45), height: sizeHeight(7.5), backgroundColor: `${color2}`, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                  >
                    <View style={{
                      borderRightColor: `${colorBor1}`, borderRightWidth: 1, height: sizeHeight(7.5), alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {inside === true ? <Image
                        source={require('../../../../assets/images/fb.png')}
                        style={{ width: 35, height: 35, marginRight: 5 }}
                      /> : <Image
                          source={require('../../../../assets/images/fb_active.png')}
                          style={{ width: 35, height: 35, marginRight: 5 }}
                        />}
                    </View>
                    <Text style={{ color: `${colorText1}`, paddingLeft: 5 }}>Chia sẻ facebook</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <View style={{ width: sizeWidth(45), height: 5, backgroundColor: `${backGround}` }}></View>
                  <View style={{ width: sizeWidth(50), height: 5, backgroundColor: `${backGround1}` }}></View>
                </View>
                <View style={{ marginBottom: 20, paddingLeft: 18 }}>
                  {inside ? <View>
                    <View>
                      <HTML
                        html={
                          data.TRAINING === null
                            ? "<h1>Không có dữ liệu</h1>"
                            : data.TRAINING
                        }
                      />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.onShare();
                        }}
                        style={{ backgroundColor: '#E1AC06', width: sizeWidth(35), borderRadius: 5, padding: 7 }}
                      >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                          <Image
                            source={require('../../../../assets/images/share.png')}
                            style={{ width: 35, height: 35 }}
                          />
                          <Text style={{ color: 'white' }}>Chia sẻ link</Text>
                        </View>

                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          this.copyIt();
                        }}
                        style={{ backgroundColor: '#222220', width: sizeWidth(35), borderRadius: 5, padding: 7 }}
                      >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                          <Image
                            source={require('../../../../assets/images/copy.png')}
                            style={{ width: 35, height: 35 }}
                          />
                          <Text style={{ color: 'white' }}>Copy link</Text>
                        </View>

                      </TouchableOpacity>
                    </View>
                  </View> : <View>
                      <Text >Nội dung bán hàng</Text>
                      <View>
                        <HTML
                          html={
                            data.CONTENT_FB === null
                              ? "<h1>Không có dữ liệu</h1>"
                              : data.CONTENT_FB
                          }
                        />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.onShareFaceBook();
                          }}
                          style={{ backgroundColor: '#E1AC06', width: sizeWidth(35), borderRadius: 5, padding: 7 }}
                        >
                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image
                              source={require('../../../../assets/images/share.png')}
                              style={{ width: 35, height: 35 }}
                            />
                            <Text style={{ color: 'white' }}>Chia sẻ</Text>
                          </View>

                        </TouchableOpacity>

                        <TouchableOpacity

                          style={{ backgroundColor: '#222220', width: sizeWidth(35), borderRadius: 5, padding: 7 }}
                        >
                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image
                              source={require('../../../../assets/images/dow.png')}
                              style={{ width: 35, height: 35 }}
                            />
                            <Text style={{ color: 'white' }}>Tải về máy</Text>
                          </View>

                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                </View>
              </View>}
          </ScrollView>


        </View>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    status: state.authUser.status,
    authUser: state.authUser.authUser,
    username: state.authUser.username,
    listItem: state.order.listItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (text) => dispatch(addToCart(text)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailProducts);
