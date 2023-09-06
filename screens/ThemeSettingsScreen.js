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
  //Get States from Async Storage
  const storedTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  //TODO: make own dataClass?!
  var themeOptions = [
    //TODO: get systemstandard
    { label: "Systemstandard", value: "system", id: 0 },
    { label: "Hell", value: "light", id: 1 },
    { label: "Dunkel", value: "dark", id: 2 },
  ];

  const onPressHandler = (value, optionId) => {
    dispatch({
      type: "CHANGE_THEME",
      mode: value,
      id: optionId,
    });
  };

  return (
    <View
      style={
        storedTheme.mode == "light"
          ? Theme.container_light
          : Theme.container_dark
      }
    >
      <Text
        style={
          storedTheme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Wähle ein App-Farbschema
      </Text>
      <Text
        style={
          storedTheme.mode == "light"
            ? Typography.paragraph_small_light
            : Typography.paragraph_small_dark
        }
      >
        Tipp: Der Darktheme ist richtig gut für die Umwelt, da dieser weniger
        Energie verbraucht.
      </Text>

      <RadioForm>
        {themeOptions.map((option, optionId) => (
          <RadioButton labelHorizontal={true} key={optionId}>
            <RadioButtonInput
              obj={option}
              id={optionId}
              isSelected={storedTheme.id === optionId}
              onPress={(value) => {
                onPressHandler(value, optionId);
              }}
              borderWidth={2}
              buttonInnerColor={Colors.accent}
              buttonOuterColor={Colors.accent}
              buttonSize={10}
              buttonOuterSize={20}
            />
            <RadioButtonLabel
              obj={option}
              id={optionId}
              labelHorizontal={true}
              onPress={(value) => {
                onPressHandler(value, optionId);
              }}
              labelStyle={
                storedTheme.mode == "light"
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
