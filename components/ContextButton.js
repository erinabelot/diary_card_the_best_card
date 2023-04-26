import * as React from "react";
import { Button } from "@rneui/base";

export default () => {
  return (
    <Button
      buttonStyle={{ width: 150, backgroundColor: "#C0D1A0" }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      iconContainerStyle={{ background: "#C0D1A0" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={() => alert("click")}
      title="Hello"
      titleProps={{}}
      titleStyle={{ marginHorizontal: 5 }}
    />
  );
};
