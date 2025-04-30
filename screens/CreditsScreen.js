//React
import React from "react";
import { Image } from "react-native";

//Styled Components
import {
  MainContainer,
  Paragraph,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

export default CreditsSettingsScreen = () => {
  return (
    <MainContainer>
      <HalfWidthView>
        <Paragraph>
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
        <Paragraph>Watchprovider data is provided by JustWatch.</Paragraph>
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
