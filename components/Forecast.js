import React from 'react'
import { View, Text, StyleSheet } from 'react-native'  

export default function Forecast(props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.desText}>{props.description}</Text>
            <View style={styles.cel}>
                <Text style={styles.tempText}>{props.temp}</Text>
                <Text style={styles.cText}> °C</Text>
            </View>
            <Text>{props.feels_like}</Text>
            <Text>°C</Text>
            <Text>Pressure</Text>
            <Text>{props.pressure}</Text>
            <Text>hPa</Text>
            <Text>Wind</Text>
            <Text>{props.wind}</Text>
            <Text>km/h</Text>
            <Text>Humidity</Text>
            <Text>{props.humidity}</Text>
            <Text>%</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 30,
        paddingBottom: 30
    },
    desText:{
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 30
    },
    cel:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20
    },
    tempText: {
        fontSize: 30,
    },
    cText: {
        textAlignVertical: 'center'
    }

});