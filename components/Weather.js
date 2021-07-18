import React, { useState, useEffect } from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        // console.log(`fetching data with zipCode = ${props.zipCode}`)
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
                    icon: json.weather[0].icon,
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
        icon: '-'
    });

    let bgImg
    if (forecastInfo.main === 'Clouds'){
        bgImg = require('../images/clouds.jpg')
    }
    else if (forecastInfo.main === 'Rain'){
        bgImg = require('../images/rain3.jpg')
    }

    const {width: windowWidth, height: windowHeight} = useWindowDimensions();

    return (
        <>
            <StatusBar barStyle='auto'/>
            { }
            <View style={{width: windowWidth, height: windowHeight}}>
                <ImageBackground source={bgImg} style={styles.backdrop}>
                    <View style={styles.bg}>
                        <Text style={styles.codeText}>Zip code: {props.zipCode}</Text>
                        <Forecast {...forecastInfo} />
                    </View>
                </ImageBackground>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
    },
    bg: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 20,
    },
    codeText: {
        marginTop: 100,
        color: 'white',
        fontWeight: 'bold',
    },
});


