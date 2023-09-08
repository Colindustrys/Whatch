import { Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

import Colors from "../constants/Colors";
import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

import {
  Container,
  HeaderText,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { darkTheme, lightTheme } from "../redux-store/Theme";

export default ThemeSettingsScreen = () => {
  //dont need this anmyore
  const storedTheme = useSelector((state) => state.appearance);

  //get selected radioField
  const storedthemeSettingSelect = useSelector(
    (state) => state.themeSettingSelect
  );

  const dispatch = useDispatch();

  //TODO: make own dataClass?!
  var themeOptions = [
    //TODO: get systemstandard
    { label: "Systemstandard", value: "lightTheme", id: 0 },
    { label: "Hell", value: lightTheme, id: 1 },
    { label: "Dunkel", value: darkTheme, id: 2 },
  ];

  const onPressHandler = (value, optionId) => {
    console.log(storedTheme);
    dispatch({
      type: "SELECT_ID",
      id: optionId,
    });

    dispatch({
      type: "SWITCH_THEME",
      baseTheme: value,
    });
  };

  return (
    <Container>
      <Paragraph>Wähle ein App-Farbschema</Paragraph>
      <ParagraphSmall>
        Tipp: Der Darktheme ist richtig gut für die Umwelt, da dieser weniger
        Energie verbraucht.
      </ParagraphSmall>

      {/** TODO: make own Component for RadioForm --> how to style this in styledComps */}

      <RadioForm>
        {themeOptions.map((option, optionId, value) => (
          <RadioButton labelHorizontal={true} key={optionId}>
            <RadioButtonInput
              obj={option}
              id={optionId}
              isSelected={optionId === storedthemeSettingSelect.id}
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
    </Container>
  );
};
