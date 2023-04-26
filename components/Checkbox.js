import * as React from "react";
import { CheckBox } from "@rneui/base";
import { View } from "react-native";

const MyCheckbox = ({ title }) => {
  const [checked, setChecked] = React.useState(false);
  return (
      <CheckBox
        checked={checked}
        checkedColor="#E9E6E6"
       
        containerStyle={{ width: "75%", backgroundColor: '#14121b', marginBottom: 5, marginLeft: -5, marginRight:30 }}
        onIconPress={() => setChecked(!checked)}
        onLongIconPress={() =>
          console.log("onLongIconPress()")
        }
        onLongPress={() => console.log("onLongPress()")}
        onPress={() => console.log("onPress()")}
        size={20}
        textStyle={{color: '#E9E6E6', fontWeight: 300, marginLeft: 5, marginTop: 0, fontSize: 15}}
        title={title}
        titleProps={{}}
        uncheckedColor="#ffffff"
      />
  );
}

export default MyCheckbox;