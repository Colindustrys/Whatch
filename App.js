import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux-store/store";
import Index from "./Index";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
