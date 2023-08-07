import React from 'react'
import { View, Text, Button } from 'react-native'

export default BrowseScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Ich bin der BrowseScreen.</Text>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color="#841584"
      />
    </View>
  )
}
