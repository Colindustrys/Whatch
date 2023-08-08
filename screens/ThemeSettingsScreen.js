import React from 'react'
import { Text, View, Button } from 'react-native'; 

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { switchMode } from '../redux-store/actions';

import Typography from '../constants/Typography.js';
import Theme from '../constants/Theme'


export default ThemeSettingsScreen = () => {
  // get the current theme
const theme = useSelector(state => state.theme);
// initialize action dispatcher
const dispatch = useDispatch();
// define a component mode state
const [mode, setMode] = useState(theme.mode);

// Handle changing the theme mode
const handleThemeChange = () => { 
  dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
}

// Update the app Incase the theme mode changes
useEffect(() => { 
  setMode(theme.mode);
}, [theme]);

  return (
    <View style={mode == 'light' ? Theme.container_light : Theme.container_dark}>
      <Text style={mode == 'light' ? Typography.headline_small_light : Typography.headline_small_dark}>Theme</Text>
      <Button title="Switch Mode" onPress={handleThemeChange} />
    </View>
  )
}
