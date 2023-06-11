import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons'; 

export default function Weather({temp, condition}) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
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

    }

})
