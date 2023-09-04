import * as React from "react";
import { Provider } from "react-redux";
import Index from "./Index";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux-store/store";
import { Text } from "react-native";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
}

export default App;
