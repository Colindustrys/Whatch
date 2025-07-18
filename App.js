//React
import * as React from "react";
import { Provider } from "react-redux";
import { Text } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Index
import Index from "./Index";

//Redux
import { store, persistor } from "./redux-store/store";

function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <Index />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
