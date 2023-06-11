// import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './Loading';
import Weather from './Weather';

const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '2002e58b1b63a441b83a6b24a53cf29a';

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`${URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
    console.log(data);
    const {main: {temp}, weather, sys: {country}, name} = data;
    console.log(country);
    console.log(name);
    console.log(weather[0].description);
    // const condition = "Clouds";
    this.setState({
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main, 
      description: weather[0].description,
      country: country,
      location: name });

  }

  getLocation = async () => {
    try {
      // const respons = await Location.requestPermissionsAsync();
      await Location.requestForegroundPermissionsAsync ();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
      
      // TODO: Get a respons to API
      
    } catch (error) {
      Alert.alert('Can`t get your location');
      
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition, country, location, description} = this.state;


    return ( 
      isLoading ? <Loading /> 
      : <Weather  
          temp={Math.round(temp)} 
          condition={condition}
          country={country}
          location ={location}
          description={description}
           />
  )}




}

