import React from 'react'
import { View, Text, Button } from 'react-native'

import { useSelector} from 'react-redux'; 

import Typography from '../constants/Typography.js';
import Theme from '../constants/Theme'

export default SearchScreen = ({ navigation }) => {

  const theme = useSelector(state => state.theme);

  return (
    <View style={theme.mode == 'light' ? Theme.container_light : Theme.container_dark}>
      <Text style={theme.mode == 'light' ? Typography.headline_small_light : Typography.headline_small_dark}>Was suchst du?</Text>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color="#841584"
      />
    </View>
  )
}
