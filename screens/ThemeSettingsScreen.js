//React
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  Appearance,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//Styled Components
import {
  MainContainer,
  Paragraph,
  StyledRadioButtonInput,
  StyledRadioButtonLabel,
  HalfWidthView,
  StyledRadioButton,
  StyledRadioButtonInner,
  StyledRadioButtonDescription,
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
    // console.log("value");
    // console.log(value);
    // console.log("optionID");
    // console.log(optionId);

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
          Tip: The dark-theme uses less power on certain screens.
        </Paragraph>

        <View style={{ flexDirection: "column", gap: 8 }}>
          {themeOptions.map((option, optionId, value) => (
            <TouchableOpacity
              style={{
                height: 48,
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
              onPress={() => {
                onPressHandler(option.value, optionId);
              }}
              key={optionId}
            >
              <StyledRadioButton>
                {optionId === storedthemeSettingSelect.id && (
                  <StyledRadioButtonInner />
                )}
              </StyledRadioButton>

              <StyledRadioButtonDescription>
                {option.label}
              </StyledRadioButtonDescription>
            </TouchableOpacity>
          ))}
        </View>
      </HalfWidthView>
    </MainContainer>
  );
};
