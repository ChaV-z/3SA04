import React from 'react'
import { View, Text, StyleSheet } from 'react-native'  

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text>{props.description}</Text>
            <View style={styles.cel}>
                <Text style={styles.tempText}>{props.temp}</Text>
                <Text style={styles.cText}> °C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        fontSize: 30,
    },
    cel:{
        flexDirection: 'row',
    },
    tempText: {
        fontSize: 30,
    },
    cText: {
        textAlignVertical: 'center'
    }

});