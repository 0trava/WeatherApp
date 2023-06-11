import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading weather status...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF2A0",
    },

    text: {
        color: "#2c2c2c",
        fontSize: 24,

    }
})