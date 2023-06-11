import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons'; 

export default function Weather({temp, condition}) {
  return (
    <View style={styles.container}>
      <View style={styles.halfConatiner}> 
        <Ionicons name="cloud" size={90} color="black" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfConatiner}> 
      </View>
    </View>
  )
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired,
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

    }

})
