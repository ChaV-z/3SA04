import React, { useState, useEffect } from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
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
    // const bgImg = require('../images/clouds.jpg')
    // console.log(">",bgImg)
    // if (forecastInfo.main === 'Clouds')
    //     {icon = require('../images/clouds.jpg')
    //     console.log(icon)}
    // else if (forecastInfo.main === 'Rain')
    //     {bgImg = require('../images/rain.jpg')
    //     console.log(bgImg)}
    const {width: windowWidth, height: windowHeight} = useWindowDimensions();

    return (
        <>
            <StatusBar barStyle='auto'/>
            <View style={{width: windowWidth, height: windowHeight}}>
                <ImageBackground source={require('../images/clouds.jpg')} style={styles.backdrop}>
                {/* <ImageBackground source={require('../images/rain.jpg')} style={styles.backdrop}> */}
                    {/* <Text style={styles.codeText}>Zip Code is {props.zipCode}</Text> */}
                    <Forecast {...forecastInfo} />
                </ImageBackground>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
    },
});


