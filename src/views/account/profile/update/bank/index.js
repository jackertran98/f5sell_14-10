import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../style";
import { FormTextInput } from "../../../../../components/textinput";
import {
  sizeFont,
  sizeWidth,
  sizeHeight,
} from "../../../../../utils/helper/size.helper";
import { COLOR } from "../../../../../utils/color/colors";
export default class ListBank extends Component {
  render() {
    const {
      account,
      nameBank,
      nameAccount,
      changeStateAccount,
      changeStateName,
      changeStateBank,
      deleteStateAccount,
      deleteStateBank,
      deleteStateName,
      updateAccount,
      title,
    } = this.props;
    return (
      <View style={{ marginTop: sizeHeight(2) }}>
        <View style={styles.infor}>
          <Text style={styles.textInfor}>Tài khoản ngân hành</Text>
        </View>
        <View style={{ alignSelf: "center", marginTop: sizeHeight(1) }}>
          <FormTextInput
            props={{
              placeholder: "Số tài khoản",
              placeholderTextColor: "#999",
              type: "phone",
              size: sizeFont(6),
              name: "times-circle",
              value: account,
              onChangeText: (text) => changeStateAccount(text),
              primary: "#017DFF",
              color: COLOR.BUTTON,
              onDelete: () => deleteStateAccount(),
              style: styles.styleWidth,
            }}
            eye={false}
            onSetSee={this.onSetSee}
            styleTextInput={{
              width: sizeWidth(78),
            }}
            styleChild={styles.styleChild}
          />
          <FormTextInput
            props={{
              placeholder: "Tên tài khoản",
              placeholderTextColor: "#999",
              type: "email",
              size: sizeFont(6),
              name: "times-circle",
              value: nameAccount,
              onChangeText: (text) => changeStateName(text),
              primary: "#017DFF",
              color: COLOR.BUTTON,
              onDelete: () => deleteStateName(),
              style: styles.styleWidth,
            }}
            eye={false}
            onSetSee={this.onSetSee}
            styleTextInput={{
              width: sizeWidth(78),
            }}
            styleChild={styles.styleChild}
          />
          <FormTextInput
            props={{
              placeholder: "Ngân hàng",
              placeholderTextColor: "#999",
              type: "email",
              size: sizeFont(6),
              name: "times-circle",
              value: nameBank,
              onChangeText: (text) => changeStateBank(text),
              primary: "#017DFF",
              color: COLOR.BUTTON,
              onDelete: () => deleteStateBank(),
              style: styles.styleWidth,
            }}
            eye={false}
            onSetSee={this.onSetSee}
            styleTextInput={{
              width: sizeWidth(78),
            }}
            styleChild={styles.styleChild}
          />
        </View>
        <TouchableOpacity
          onPress={updateAccount}
          style={{
            backgroundColor: COLOR.BUTTON,
            paddingVertical: sizeHeight(2),
            borderRadius: 6,
            width: sizeWidth(70),
            alignSelf: "center",
            marginTop: sizeHeight(4),
            marginBottom: sizeHeight(4),
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: sizeFont(4),
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
