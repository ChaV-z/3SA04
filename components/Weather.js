import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'  
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View>
            <ImageBackground soruce={require('../bg1.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Forecast {... forecastInfo}/>
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})