import React from 'react'
import { View, Text, StyleSheet } from 'react-native'  

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.desText}>{props.description}</Text>
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