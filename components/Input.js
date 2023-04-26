import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default () => {
  return (
    <Input
      containerStyle={{ marginTop: 50 }}
      disabledInputStyle={{ background: "#ffffff" }}
      inputContainerStyle={{}}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{ color: "#ffffff" }}
  
      labelStyle={{}}
      labelProps={{}}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Write here"
      placeholderTextColor="#ffffff"

    />
  );
};