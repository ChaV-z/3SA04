import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3b82f284f9633c124c8f15aa96890318`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    name: json.name,
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    feels_like: json.main.feels_like,
                    pressure: json.main.pressure,
                    humidity: json.main.humidity,
                    wind: json.wind.speed,
                }); 
             })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    
    const [forecastInfo, setForecastInfo] = useState({
        name: '-',
        main: '-',
        description: '-',
        temp: 0,
        feels_like: 0,
        pressure: 0,
        humidity: 0,
        wind: 0,
    });

    return (
        <View>
            <ImageBackground source={require('../images/bg1.jpg')} style={styles.backdrop}>
                <View style={styles.bgText}>
                    <Text style={styles.codeText}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    bgText: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    codeText:{
        padding: 20
    }
});


