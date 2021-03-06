import {
  sizeFont,
  sizeHeight,
  sizeWidth,
} from "../../../utils/helper/size.helper";
import { COLOR } from "../../../utils/color/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    fontSize: sizeFont(4),
    color: "#fff",
    backgroundColor: COLOR.BUTTON,
    paddingVertical: sizeHeight(1),
    paddingHorizontal: sizeWidth(2.5),
  },
  viewItemChild: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: sizeHeight(0.2),
  },
  textCommon: {
    color: COLOR.BUTTON,
    fontSize: sizeFont(4),
  },
  textOrder: {
    fontWeight: "bold",
    fontSize: sizeFont(4),
    //paddingHorizontal: sizeWidth(2.5),
    //marginTop: sizeHeight(1),
  },
  textTime: {
    color: "#000",
    //textDecorationLine: "underline",
    fontSize: sizeFont(4),
  },
  space: {
    paddingBottom: sizeHeight(0.2),
  },
  viewTimeDeliver: {
    flexDirection: "row",
    width: sizeWidth(40),
    paddingVertical: sizeHeight(0.6),

    //justifyContent: "space-between",
  },
  size: {
    fontSize: sizeFont(4),
  },
  textPrice: {
    color: COLOR.BUTTON,
    fontSize: sizeFont(4),
  },
  viewTable: {
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    flex: 1,
  },
  viewPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: sizeWidth(2.5),
    marginBottom: sizeHeight(1),
  },
  viewSetting: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: sizeWidth(2.5),
    alignItems: "center",
    alignContent: "center",
    marginBottom: sizeHeight(1),
  },
  textTitlePrice: {
    fontSize: sizeFont(4),
    fontWeight: "400",

    //marginRight: sizeWidth(5),
  },
  textSetting: {
    color: "#017DFF",
    fontSize: sizeFont(4),
    marginLeft: sizeWidth(2.5),
  },
  reciver: {
    borderWidth: 1,
    borderColor: "#888",
    width: sizeWidth(95),
    alignSelf: "center",
    marginBottom: sizeHeight(2.5),
  },
  viewChild: {
    borderBottomColor: "#888",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  textReciver: {
    paddingVertical: sizeHeight(1),
  },
  textReciverDetail: {
    flex: 2.6,
    paddingVertical: sizeHeight(1),
    paddingHorizontal: sizeWidth(2),
  },
  textTitleContent: {
    color: "#444",
    fontSize: sizeFont(4),
    marginRight: sizeWidth(2.5),
  },
  textContent: {
    fontSize: sizeFont(4),
    color: "#000",
  },
  viewChildDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: sizeWidth(2),
    marginBottom: sizeHeight(1.2),
    alignItems: "center",
    alignContent: "center",
  },
  viewCount: {
    borderWidth: 1,
    borderColor: COLOR.BUTTON,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textCount: {
    backgroundColor: COLOR.BUTTON,
    color: "#fff",
    paddingHorizontal: sizeWidth(3),
    paddingVertical: sizeHeight(1),
    textAlign: "center",
    fontSize: sizeFont(4),
  },
  viewTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLOR.HEADER,
    marginTop: sizeHeight(1),
  },
  textImage: {
    fontWeight: "bold",
    fontSize: sizeFont(4),
    paddingVertical: sizeHeight(2),
  },
  viewImage: {
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    borderRightColor: "#888",
  },
  textProductName: {
    fontSize: sizeFont(4),
    marginLeft: sizeWidth(2),
    paddingBottom: sizeHeight(1),
    fontWeight: "bold",
  },
  viewMoney: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: sizeHeight(1),
    width: sizeWidth(96),
    alignSelf: "center",
  },
  touchOne: {
    borderColor: COLOR.BUTTON,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    marginRight: sizeWidth(2),
    paddingVertical: sizeHeight(1),
    paddingHorizontal: sizeWidth(1),
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchTwo: {
    // borderColor: COLOR.BUTTON,
    flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
    // borderRadius: 6,
    paddingVertical: sizeHeight(1),

    justifyContent: "space-between",
    alignItems: "center",
    width: sizeWidth(96),
  },
  touchTwoShop: {
    borderColor: COLOR.BUTTON,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: sizeHeight(0),
    paddingHorizontal: sizeWidth(1),
    justifyContent: "space-between",
    alignItems: "center",
  },
  textFirst: { fontSize: sizeFont(4), color: "#000", fontWeight: "600" },
  textSecond: {
    fontSize: sizeFont(4),
    color: "#000",
    fontWeight: "bold",
  },
  textSecondShop: {
    fontSize: sizeFont(4),
    color: "#fff",
    //fontWeight: "bold",
  },
  viewIcon: {
    // backgroundColor: COLOR.BUTTON,
    // borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    //paddingHorizontal: sizeWidth(2),
    width: sizeWidth(40),
    paddingVertical: sizeHeight(0.6),
    //paddingLeft: sizeWidth(4),
    justifyContent: "space-between",
  },
  viewIconShop: {
    backgroundColor: COLOR.BUTTON,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: sizeWidth(2),
    width: sizeWidth(40),
    paddingVertical: sizeHeight(0.6),
    paddingLeft: sizeWidth(4),
    justifyContent: "space-between",
  },
  touchSearch: {
    marginTop: sizeHeight(4),
    backgroundColor: COLOR.BUTTON,
    borderRadius: 6,
    paddingVertical: sizeHeight(2),
    width: sizeWidth(80),
    alignSelf: "center",
    marginBottom: sizeHeight(4),
  },
  touchSearchColl: {
    marginTop: sizeHeight(1),
    backgroundColor: COLOR.BUTTON,
    borderRadius: 6,
    paddingVertical: sizeHeight(1.5),
    width: sizeWidth(50),
    alignSelf: "center",
  },
  touchCommon: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#999",
    borderBottomWidth: 0.5,
    paddingVertical: sizeHeight(2),
  },

  viewTouchCommon: {
    width: sizeWidth(95),
    alignSelf: "center",
    marginTop: sizeHeight(2),
  },
  textCommon: {
    fontSize: sizeFont(4),
    fontWeight: "400",
    color: COLOR.BUTTON,
  },
  containerCommon: {
    marginTop: sizeHeight(1),
  },
  textColl: {
    fontSize: sizeFont(4),
    fontWeight: "bold",
    color: "#fff",
  },
  viewColl: {
    borderBottomWidth: 4,
    borderBottomColor: "#ddd",
    borderTopColor: "#ddd",
    borderTopWidth: 4,
    paddingVertical: sizeHeight(1.5),
    marginTop: sizeHeight(1),
  },
  viewPerson: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  viewChildPerson: {
    backgroundColor: COLOR.BUTTON,
    paddingVertical: sizeHeight(1),
    paddingHorizontal: sizeWidth(3),
    borderRightWidth: 1,
    borderRightColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  textNote: {
    paddingBottom: sizeHeight(4),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLOR.BUTTON,
    paddingHorizontal: sizeWidth(2),
    paddingVertical: sizeHeight(1),
  },
  viewFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: sizeHeight(1),
  },
  touchAccept: {
    paddingVertical: sizeHeight(1),
    borderRadius: 6,
    backgroundColor: COLOR.BUTTON,
    width: sizeWidth(40),
  },
  textAccept: {
    color: "#fff",
    fontSize: sizeFont(4),
    textAlign: "center",
  },
  viewModal: {
    backgroundColor: "#fff",
    width: sizeWidth(101),
    alignSelf: "center",
    paddingBottom: sizeHeight(4),
  },
  viewModalTitle: {
    backgroundColor: COLOR.BUTTON,

    paddingVertical: sizeHeight(2),
    paddingHorizontal: sizeWidth(3),
    alignItems: "center",
  },
  textTitleModal: {
    color: "#fff",
    fontSize: sizeFont(4),
    textAlign: "center",
  },
});

export default styles;
