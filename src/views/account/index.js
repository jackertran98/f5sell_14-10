import React, { Component } from "react";
import { View, Text, StatusBar,TouchableOpacity } from "react-native";
import Information from "./infor";
import LogoApp from "./logo";
import { sizeHeight,sizeFont } from "../../utils/helper/size.helper";
import Register from "./register";
import Contact from "./contact";
import { connect } from "react-redux";
import Profile from "./profile";
import { COLOR } from "../../utils/color/colors";

class Account extends Component {
   
  render() {
    const { navigation } = this.props;
    const { status, authUser } = this.props;
    
    const {discription}=this.props.route.params;
  
    return (
      <View style={{ backgroundColor: "#E1AC06", height: sizeHeight(110) }}>
        <TouchableOpacity style={{alignItems:'flex-end',paddingTop:20,paddingRight:20}}
          onPress={()=>{
            navigation.navigate("screenHome")
          }}
        >
         <Text style={{fontSize:25}}>X</Text>
        </TouchableOpacity>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLOR.HEADER}
          //translucent
        />
        <LogoApp />
        <Register navigation={this.props.navigation} discription={discription}/>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    status: state.authUser.status,
    authUser: state.authUser.authUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { LoginPhone: (data) => dispatch(LoginPhone(data)) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
