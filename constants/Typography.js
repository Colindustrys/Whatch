import { StyleSheet } from 'react-native';
import Colors from './Colors.js'

module.exports = StyleSheet.create({
    headline_big_light: {
        fontSize: 32,
        textAlign: 'center', 
        textTransform: 'uppercase',
        color: Colors.black,
    },
    headline_small_light: {
        fontSize: 24,
        textAlign: 'center', 
        color: Colors.black,
        marginBottom: 32,
    },
    paragraph_light: {
        fontSize: 16,
        textAlign: 'left', 
        color: Colors.black,
    },
    headline_big_dark: {
        fontSize: 32,
        textAlign: 'center', 
        textTransform: 'uppercase',
        color: Colors.white,
        },
    headline_small_dark: {
        fontSize: 24,
        textAlign: 'center', 
        color: Colors.white,
        marginBottom: 32,
        },
    paragraph_dark: {
        fontSize: 16,
        textAlign: 'left', 
        color: Colors.white,
        },

});