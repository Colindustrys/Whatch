//React
import { useSelector, useDispatch } from "react-redux";
import React from "react";

//Styled Components
import {
  MainContainer,
  Paragraph,
  StyledRadioButtonInput,
  StyledRadioButtonLabel,
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
    { label: "Systemstandard", value: "lightTheme", id: 0 },
    { label: "Hell", value: lightTheme, id: 1 },
    { label: "Dunkel", value: darkTheme, id: 2 },
  ];

  //TODO: outsource dispatch in actionHandler
  const onPressHandler = (value, optionId) => {
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
    <MainContainer>
      <Paragraph>Wähle ein App-Farbschema</Paragraph>
      <Paragraph small>
        Tipp: Der Darktheme ist richtig gut für die Umwelt, da dieser weniger
        Energie verbraucht.
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
    </MainContainer>
  );
};
