import React from 'react'
import { View, Text, Button } from 'react-native'

export default RandomScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Ich bin der RandomScreen.</Text>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color="#841584"
      />
    </View>
  )
}
