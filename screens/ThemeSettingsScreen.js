//React
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  Appearance,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Platform,
  AccessibilityInfo,
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

//Theme
import { darkTheme, lightTheme } from "../redux-store/Theme";

export default ThemeSettingsScreen = () => {
  //Get Selected Radiofield from Async Storage
  const storedthemeSettingSelect = useSelector(
    (state) => state.themeSettingSelect
  );
  const [selectedOption, setSelectedOption] = useState(
    useSelector((state) => state.themeSettingSelect).id
  );

  const dispatch = useDispatch();

  //TODO: make own dataClass?!
  var themeOptions = [
    //TODO: get systemstandard
    { label: "System-Setting", value: "lightTheme", id: 0 },
    { label: "Light", value: lightTheme, id: 1 },
    { label: "Dark", value: darkTheme, id: 2 },
  ];

  const isIOS = Platform.OS === "ios";

  //TODO: outsource dispatch in actionHandler
  const onPressHandler = (value, optionId) => {
    setSelectedOption(optionId);

    //--apperance reducer--
    //overwrite the value variable theme to system theme
    if (optionId == 0) {
      if (Appearance.getColorScheme() == "light") {
        value = lightTheme;
      } else {
        value = darkTheme;
      }
    }

    setTimeout(() => {
      //--theme settings reducer--
      dispatch({
        type: "SELECT_ID",
        id: optionId,
      });

      //dispatch theme
      dispatch({
        type: "SWITCH_THEME",
        baseTheme: value,
      });
    }, 0);
  };

  return (
    <MainContainer accessible={false}>
      <HalfWidthView accessible={false}>
        <Paragraph accessible={true}>Choose your color scheme</Paragraph>
        <Paragraph small accessible={true}>
          Tip: The dark-theme uses less power on certain screens.
        </Paragraph>

        <View style={{ flexDirection: "column", gap: 8 }} accessible={false}>
          {themeOptions.map((option, optionId, value) => (
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={`${option.label} theme`}
              accessibilityRole="radio"
              accessibilityState={{
                checked: optionId === selectedOption,
              }}
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
              <StyledRadioButton accessible={false}>
                {option.id === selectedOption && (
                  <StyledRadioButtonInner accessible={false} />
                )}
              </StyledRadioButton>

              <StyledRadioButtonDescription accessible={false}>
                {option.label}
              </StyledRadioButtonDescription>
            </TouchableOpacity>
          ))}
        </View>
      </HalfWidthView>
    </MainContainer>
  );
};
