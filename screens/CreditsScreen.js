//React
import React, { useEffect, useRef } from "react";
import { Image, AccessibilityInfo, findNodeHandle } from "react-native";

//Styled Components
import {
  MainContainer,
  Paragraph,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

export default CreditsSettingsScreen = () => {
  const focusRef = useRef(null);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const reactTag = findNodeHandle(focusRef.current);
  //     if (reactTag) {
  //       AccessibilityInfo.setAccessibilityFocus(reactTag);
  //     }
  //   }, 100); // delay ensures element is mounted

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <MainContainer accessible={false}>
      <HalfWidthView accessible={false}>
        <Paragraph accessible={true}>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </Paragraph>
        {/* Just Watch Logo */}
        <Image
          source={require("../assets/TMDB.png")}
          style={{
            width: 250,
            height: 50,
            resizeMode: "contain",
            marginBottom: 40,
          }}
        />
        <Paragraph ref={focusRef} accessible={true}>
          Watchprovider data is provided by JustWatch.
        </Paragraph>
        <Image
          source={require("../assets/JustWatch.png")}
          style={{
            width: 250,
            height: 50,
            resizeMode: "contain",
          }}
        />
      </HalfWidthView>
    </MainContainer>
  );
};
