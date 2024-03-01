//React
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Appearance } from "react-native";

//Styled Components
import {
  MainContainer,
  Paragraph,
  StyledRadioButtonInput,
  StyledRadioButtonLabel,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

//Third Partys Components
import RadioForm, { RadioButton } from "react-native-simple-radio-button";

//Theme
import { darkTheme, lightTheme } from "../redux-store/Theme";

export default ThemeSettingsScreen = () => {
  //Get Selected Radiofield from Async Storage
  const storedthemeSettingSelect = useSelector(
    (state) => state.themeSettingSelect
  );

  const dispatch = useDispatch();

  //TODO: make own dataClass?!
  var themeOptions = [
    //TODO: get systemstandard
    { label: "System-Setting", value: "lightTheme", id: 0 },
    { label: "Light", value: lightTheme, id: 1 },
    { label: "Dark", value: darkTheme, id: 2 },
  ];

  //TODO: outsource dispatch in actionHandler
  const onPressHandler = (value, optionId) => {
    //--theme settings reducer--
    dispatch({
      type: "SELECT_ID",
      id: optionId,
    });

    //--apperance reducer--
    //overwrite the value variable theme to system theme
    if (optionId == 0) {
      if (Appearance.getColorScheme() == "light") {
        value = lightTheme;
      } else {
        value = darkTheme;
      }
    }
    //dispatch theme
    dispatch({
      type: "SWITCH_THEME",
      baseTheme: value,
    });
  };

  return (
    <MainContainer>
      <HalfWidthView>
        <Paragraph>Choose your color scheme</Paragraph>
        <Paragraph small>
          Tip: The dark-theme uses less power on certain screen.
        </Paragraph>
        <RadioForm>
          {themeOptions.map((option, optionId, value) => (
            <RadioButton labelHorizontal={true} key={optionId}>
              <StyledRadioButtonInput
                obj={option}
                id={optionId}
                isSelected={optionId === storedthemeSettingSelect.id}
                onPress={(value) => {
                  onPressHandler(value, optionId);
                }}
              />
              <StyledRadioButtonLabel
                obj={option}
                id={optionId}
                labelHorizontal={true}
                onPress={(value) => {
                  onPressHandler(value, optionId);
                }}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </HalfWidthView>
    </MainContainer>
  );
};
