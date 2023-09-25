//React
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//Components
import ProviderItem from "../components/ProviderItem.js";

//Styled Components
import { MainContainer, Paragraph } from "../redux-store/StyledComponents.js";

export default ProviderSettingsScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedProvider = useSelector((state) => state.providerList);
  const storedPersonalProvider = useSelector(
    (state) => state.personalProviderList
  );
  const dispatch = useDispatch();

  //Function is called if specific Switch is toggled
  //Depending on state of switch, providerID is deleted oder added to async storage
  const toggleSwitch = (providerID, providerValue) => {
    let type;
    if (!providerValue) {
      type = "ADD_PROVIDER_TO_PROVIDERLIST";
    } else {
      type = "DELETE_PROVIDER_FROM_PROVIDERLIST";
    }
    dispatchHandler(type, providerID);
  };

  //TODO: outsource dispatch in actionHandler
  const dispatchHandler = (type, providerID) => {
    dispatch({
      type: type,
      payload: providerID,
    });
  };

  return (
    <MainContainer>
      <FlatList
        ListHeaderComponent={
          <View>
            <Paragraph>Wähle deine abonnierten Streamingdienste</Paragraph>
            <Paragraph small>
              Deine persönlichen Streamingdienste benötigen wir, um dir die
              perfekten Ergebnisse liefern zu können.
            </Paragraph>
          </View>
        }
        data={storedProvider.provider}
        renderItem={({ item }) => (
          <ProviderItem
            providerLabel={item.label}
            providerValue={storedPersonalProvider?.provider?.includes(item.id)}
            toggleSwitch={toggleSwitch}
            providerID={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </MainContainer>
  );
};
