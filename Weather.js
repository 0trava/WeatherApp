import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import {weatherOptions} from './components/weatherOptions';

export default function Weather({temp, condition, country, location, description}) {
  return (
    <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <View style={styles.halfConatiner}> 
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      
      <View style={{...styles.halfConatiner, ...styles.textContainer}}>
         <Image source={{ uri: `https://www.flagistrany.ru/data/flags/h80/${country}.webp` }} style={{ width: 40, height: 30 }}/>
         <Text style={styles.title}>{location}</Text>
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
        textAlign: 'center',
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
