import * as React from "react";
import { Slider, Icon } from "@rneui/base";

export default ({ color, pageAnswer, setPageAnswer }) => {

  return (
    <Slider
      maximumTrackTintColor="#ccc"
      maximumValue={100}
      minimumTrackTintColor={color || "#84FB82"}
      minimumValue={0}
      onSlidingComplete={value => {
        setPageAnswer(value)
      }}
      value={pageAnswer}
      orientation="horizontal"
      step={1}
      style={{ width: "80%", height: 10, marginBottom: 100, marginLeft: 40 }}

      thumbStyle={{
        height: 35,
        width: 35,
        marginBottom: -10,
      }}
      thumbTintColor="#ffffff"
      thumbTouchSize={{ width: 40, height: 40 }}
      trackStyle={{
        height: 10,
        height: 30,
        borderRadius: 5,
      }}
    
    />
  );
}