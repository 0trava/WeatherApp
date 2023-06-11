import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Snow: {
        iconName: 'weather-snowy-heavy',
        gradient: ['#000046', '#1CB5E0'],
    },

    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
    },

    Clouds:{
        iconName: 'weather-cloudy',
        gradient: ['#095379', '#008fff'],
        title: "Clouds", 
    },

    Thunderstorm: {
        iconName: 'weather-lightning-rainy',
        gradient: ['#141E30', '#243B55'],
    },

    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
    },

    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
    },

    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
    },

    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
    },

    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
    },

    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
    },    

}

export default function Weather({temp, condition, country, location, description}) {
  return (
    <LinearGradient
    // Background Linear Gradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <View style={styles.halfConatiner}> 
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      
      <View style={{...styles.halfConatiner, ...styles.textContainer}}> 
         <Text style={styles.title}>{location} [{country}]</Text>
         <Text style={styles.subtitle}>{description}</Text>
      </View>
    </LinearGradient>
  )
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Dust", "Smoke", "Haze", "Mist"]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    halfConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    temp: {
        fontSize: 42,
        color: "white",

    },


    title: {
        color: "white",
        fontSize: 44,
        fontWeight: 300,
        marginBottom: 10,
        textAlign: 'left',
    },

    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: 600,
        textAlign: 'left',
    },

    textContainer: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'center',
    },

})
