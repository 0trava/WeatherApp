import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import * as Location from 'expo-location';

import Loading from './Loading';

export default class extends React.Component {

  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
      
    } catch (error) {
      Alert.alert('Can`t get your location');
      
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    return ( 
      <Loading />
  )}




}

