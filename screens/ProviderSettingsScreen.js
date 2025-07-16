//React
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//Components
import ProviderItem from "../components/ProviderItem.js";

//Styled Components
import {
  MainContainer,
  Paragraph,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

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
    // console.log("providerID");
    // console.log(providerID);
    // console.log("providerValue");
    // console.log(providerValue);

    let type;
    if (providerValue) {
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
      <HalfWidthView>
        <FlatList
          ListHeaderComponent={
            <View>
              <Paragraph>Choose your streaming services</Paragraph>
              <Paragraph small>
                You will only be shown movies that are available from your
                flatrate providers.
              </Paragraph>
            </View>
          }
          data={storedProvider.provider}
          renderItem={({ item }) => (
            <ProviderItem
              providerLabel={item.label}
              providerValue={storedPersonalProvider?.provider?.includes(
                item.id
              )}
              toggleSwitch={toggleSwitch}
              providerID={item.id}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          keyExtractor={(item) => item.id}
        />
      </HalfWidthView>
    </MainContainer>
  );
};
