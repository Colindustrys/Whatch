import React from 'react'
import { View, Text, Button } from 'react-native'

import { useSelector} from 'react-redux'; 

import Typography from '../constants/Typography.js';
import Theme from '../constants/Theme'

export default RandomScreen = ({ navigation }) => {

  const theme = useSelector(state => state.theme);
  // define a component mode state

  return (
    <View style={theme.mode == 'light' ? Theme.container_light : Theme.container_dark}>
      <Text style={theme.mode == 'light' ? Typography.headline_small_light : Typography.headline_small_dark}>Lass dich überraschen!</Text>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color="#841584"
      />
    </View>
  )
}
