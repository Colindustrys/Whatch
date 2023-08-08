import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './navigations/MainStackNavigator';

import { Provider } from 'react-redux';
import configureStore from './redux-store/store';

// Initialize the store
const store = configureStore();

// Enclose all of the other components with Provider providing the store

export default function App() {

  return (
    <Provider store={store}>
      <MainStackNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
