import { Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

import Colors from "../constants/Colors";
import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default ThemeSettingsScreen = () => {
  // get the current theme
  const theme = useSelector((state) => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();

  //TODO: auslagern
  var radio_props = [
    //TODO: get systemstandard
    { label: "Systemstandard", value: 0, index: 0 },
    { label: "Hell", value: "light", index: 1 },
    { label: "Dunkel", value: "dark", index: 2 },
  ];

  const [isSelected, setSelected] = useState(theme.index);

  return (
    <View
      style={
        theme.mode == "light" ? Theme.container_light : Theme.container_dark
      }
    >
      <Text
        style={
          theme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Wähle ein App-Farbschema
      </Text>
      <Text
        style={
          theme.mode == "light"
            ? Typography.paragraph_small_light
            : Typography.paragraph_small_dark
        }
      >
        Tipp: Der Darktheme ist richtig gut für die Umwelt, da dieser weniger
        Energie verbraucht.
      </Text>

      <RadioForm>
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={isSelected === i}
              onPress={(value, index) => {
                [
                  dispatch(
                    {
                      type: "CHANGE_THEME",
                      theme: value,
                      index: index,
                    },
                    setSelected(i)
                  ),
                ];
              }}
              borderWidth={2}
              buttonInnerColor={Colors.accent}
              buttonOuterColor={Colors.accent}
              buttonSize={10}
              buttonOuterSize={20}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={(value, index) => {
                [
                  dispatch(
                    {
                      type: "CHANGE_THEME",
                      theme: value,
                      index: index,
                    },
                    setSelected(i)
                  ),
                ];
              }}
              labelStyle={
                theme.mode == "light"
                  ? Typography.paragraph_small_light
                  : Typography.paragraph_small_dark
              }
            />
          </RadioButton>
        ))}
      </RadioForm>
    </View>
  );
};
