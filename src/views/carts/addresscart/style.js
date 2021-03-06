import { StyleSheet } from "react-native";
import {
  sizeHeight,
  sizeWidth,
  sizeFont,
} from "../../../utils/helper/size.helper";
import { COLOR } from "../../../utils/color/colors";

const styles = StyleSheet.create({
  viewAvatar: {
    alignItems: "center",
    marginTop: sizeHeight(2),
  },
  styleChild: {
    borderRadius: 6,
    height: 55,
    overflow: "hidden",
    borderWidth: 0.8,
    borderColor: COLOR.COLOR_ICON,
    width: sizeWidth(92),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  styleWidth: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    width: sizeWidth(90),
    marginTop: sizeHeight(1),
  },
  infor: {
    backgroundColor: "#222220",
    paddingVertical: sizeHeight(1.5),
  },
  textInfor: {
    fontSize: sizeFont(4.5),
    fontWeight: "bold",
    color: "#fff",
    marginLeft: sizeWidth(2.5),
  },
  viewGender: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: sizeWidth(92),
    alignSelf: "center",
    marginTop: sizeHeight(1),
  },
  textDayOfBirth: {
    fontSize: sizeFont(4),
    borderRadius: 6,
    borderWidth: 0.8,
    //paddingHorizontal: sizeWidth(5),
    textAlign: "left",
    paddingRight: sizeWidth(8),
    borderColor: COLOR.COLOR_ICON,
    backgroundColor: "#fff",
    paddingLeft: sizeWidth(2),
    paddingVertical: sizeHeight(1),
  },
  textDayTitle: {
    fontSize: sizeFont(4),
    marginBottom: sizeHeight(1),
  },
  viewChildGender: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 2,
    width: sizeWidth(27),
  },
  textGender: {
    flex: 1,
    fontSize: sizeFont(4),
    borderRadius: 6,
    backgroundColor: "#fff",
    paddingHorizontal: sizeWidth(2),
    paddingVertical: sizeHeight(0.7),
    textAlign: "center",
    overflow: "hidden",
  },
  viewImage: {
    flexDirection: "row",
    marginTop: sizeHeight(2),
    alignSelf: "center",
    width: sizeWidth(90),
  },
  viewImageChild: {
    alignItems: "center",
    flex: 1,
  },
  viewMoney: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizeWidth(2),
    paddingBottom: sizeHeight(1),
  },
  textTitle: {
    fontSize: sizeFont(4),
    color: "#888",
  },
  textMoney: {
    fontSize: sizeFont(4),
    color: "#888",
  },
  touchOrder: {
    paddingVertical: sizeHeight(2),
    backgroundColor: COLOR.BUTTON,
    borderRadius: 6,
    width: sizeWidth(80),
  },
  viewNote: {
    borderWidth: 1,
    borderColor: COLOR.COLOR_ICON,
    borderRadius: 6,
    paddingVertical: sizeHeight(1),
    paddingHorizontal: sizeWidth(2),
    width: sizeWidth(92),
    marginTop: sizeHeight(1),
    marginBottom: sizeHeight(1),
    paddingBottom: sizeHeight(7),
  },
  textPrimary: {
    fontSize: sizeFont(4),
    color: COLOR.BUTTON,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default styles;
