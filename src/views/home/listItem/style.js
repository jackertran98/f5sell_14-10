import {
  sizeHeight,
  sizeWidth,
  sizeFont,
} from "../../../utils/helper/size.helper";
import { COLOR } from "../../../utils/color/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  viewHeader: {
    //backgroundColor: "#ddd",
    paddingVertical: sizeHeight(1.5),
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: sizeWidth(2.5),
    backgroundColor: "#fff",
    // backgroundColor: "#fff",
  },
  touchViewMore: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  textViewMore: {
    fontSize: sizeFont(4),
    color: "#333",
    paddingHorizontal: sizeWidth(5),
  },
  title: {
    fontSize: sizeFont(4.5),
    fontWeight: "400",
  },
  touchFlatListChild: {
    // borderRadius: 6,
    // borderColor: COLOR.BUTTON,
    // borderWidth: 0.5,
    marginVertical: sizeHeight(1),
    // marginHorizontal: sizeWidth(2),
    width: sizeWidth(31),
    borderColor:COLOR.COLOR_BOTTOM,
    borderWidth:1.5,
    //width: sizeWidth(30),
    overflow: "hidden",
    marginRight: sizeWidth(2),
  },
  imageSize: {
    width: "100%",
    // width: sizeWidth(30),
    height: "100%",
    //height: sizeHeight(20),
    overflow: "visible",
  },
  textName: {
    fontSize: sizeFont(3.5),
    paddingVertical: sizeHeight(3.5),
    //paddingHorizontal: sizeWidth(2),

    paddingVertical: sizeHeight(1),
  },
  textCode: {
    fontSize: sizeFont(4),
    fontWeight: "bold",
    // paddingHorizontal: sizeWidth(2),
  },
  textPrice: {
    color: COLOR.BUTTON,
    fontSize: sizeFont(3.8),
    paddingVertical: sizeHeight(1),
    //paddingHorizontal: sizeWidth(2),
  },
  viewChildDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: sizeWidth(2),
    marginBottom: sizeHeight(1),
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
  textTitle: {
    fontSize: sizeFont(4),
    color: "#444",
  },
  touchSafeBuy: {
    backgroundColor: COLOR.BUTTON,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchSafeAddCart: {
    backgroundColor: COLOR.HEADER,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLOR.HEADER,
    paddingVertical: sizeHeight(1.5),
    marginTop: Platform.OS == "ios" ? sizeHeight(4) : 0,
    paddingHorizontal: sizeWidth(1),
  },
  textProduct: {
    color: "#fff",
    fontSize: sizeFont(4),
  },
  touchView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingVertical: sizeHeight(1.5),
  },
  textView: {
    fontSize: sizeFont(3.5),
    marginTop: sizeHeight(1.5),
  },
});
export default styles;
