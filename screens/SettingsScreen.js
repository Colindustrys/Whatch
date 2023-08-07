import React from 'react'
import { View, Text, Button } from 'react-native'

export default SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Ich bin der SettingsScreen.</Text>
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
