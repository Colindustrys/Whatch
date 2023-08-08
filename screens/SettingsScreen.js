import React from 'react'
import { View, Text, Button } from 'react-native'

import { useSelector} from 'react-redux'; 

import Typography from '../constants/Typography.js';
import Theme from '../constants/Theme'

export default SettingsScreen = ({ navigation }) => {

  const theme = useSelector(state => state.theme);

  return (
    <View style={theme.mode == 'light' ? Theme.container_light : Theme.container_dark}>
      <Text style={theme.mode == 'light' ? Typography.headline_small_light : Typography.headline_small_dark}>Deine Settings</Text>
      <Button
        onPress={() => navigation.navigate("ProviderSettingsScreen")}
        title="To Provider"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate("SeenlistScreen")}
        title="To SeenList"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate("LanguageSettingsScreen")}
        title="To Language"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate("ThemeSettingsScreen")}
        title="To Theme"
        color="#841584"
      />
    </View>
  )
}
