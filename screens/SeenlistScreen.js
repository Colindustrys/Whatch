//React
import React from "react";
import { Button } from "react-native";

//Styled Components
import { Container } from "../redux-store/StyledComponents.js";

export default SeenlistScreen = ({ navigation }) => {
  return (
    <Container>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </Container>
  );
};
