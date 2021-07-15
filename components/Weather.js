import React, { useState } from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    });

    return (
        <View>
            <ImageBackground source={require('../bg1.jpg')} style={styles.backdrop}>
                <View style={styles.bgText}>
                    <Text>Zip Code is {props.zipCode}</Text>
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
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    }
});


