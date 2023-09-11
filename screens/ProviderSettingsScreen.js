//React
import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//Components
import ProviderItem from "../components/ProviderItem.js";

//Styled Components
import {
  Container,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";
import { useEffect, useState } from "react";

/* @ Alex: Was brauchst du zum filtern? Nur die aktiven Provider oder kannst du mit der ganzen Liste arbeiten? */
export default ProviderSettingsScreen = ({ navigation }) => {
  

  //Get States from Async Storage
  const storedProvider = useSelector((state) => state.provider);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(storedProvider.provider);
    setLoading(true)
  }, [storedProvider.provider]);

  const toggleSwitch = (index) => {
    //toggle value of selected provider
    const tempProviderList = [...storedProvider.provider];
    tempProviderList[index].value = !tempProviderList[index].value;

    dispatch({
      type: "SET_PROVIDER",
      payload: tempProviderList,
    });
  };

  return (
    <Container>
      <Paragraph>Wähle deine abonnierten Streamingdienste</Paragraph>
      <ParagraphSmall>
        Deine persönlichen Streamingdienste benötigen wir, um dir die perfekten
        Ergebnisse liefern zu können.
      </ParagraphSmall>

      {loading ? (
        <FlatList
          data={storedProvider.provider}
          renderItem={({ item, index }) => (
            <ProviderItem
              providerLabel={item.label}
              providerValue={item.value}
              position={index}
              toggleSwitch={toggleSwitch}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </Container>
  );
};
