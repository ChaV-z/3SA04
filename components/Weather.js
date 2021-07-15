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


