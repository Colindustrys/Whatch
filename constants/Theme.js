import { StyleSheet } from 'react-native';
import Colors from './Colors.js'

module.exports = StyleSheet.create({
    container_light: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 16, 
        paddingTop: 80,
        backgroundColor: Colors.white,
    },
    container_dark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 16, 
        paddingTop: 80,
        backgroundColor: Colors.black,
    }
});