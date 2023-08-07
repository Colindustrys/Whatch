import React from 'react'
import { View, Text, Button } from 'react-native'

export default SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Ich bin der SearchScreen.</Text>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color="#841584"
      />
    </View>
  )
}
