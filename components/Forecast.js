import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'  


export default function Forecast(props) {

    console.log(props.icon)
    let icon = props.icon
    const iconurl = 'http://openweathermap.org/img/wn/'+props.icon+'@4x.png'
    console.log(icon)
    return (
        <>
            <View style={styles.topFrame}>
                <View>
                    <Text style={styles.nameText}>{props.name}</Text>
                </View>
                <View>
                    <Text style={styles.tempText}>{props.temp} °C</Text>
                    {/* <View>
                        <Text style={styles.mainText}>{props.main}</Text>
                    </View> */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 45, height:45, }} source={{uri:iconurl}}/>
                        <Text style={styles.desText}>{props.description}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.bottomFrame}>
                <View style={styles.detail}>
                    <Text style={styles.infoText}>Feels like</Text>
                    <Text style={styles.infoText, {fontSize: 24, color: 'white'}}>{props.feels_like}</Text>
                    <Text style={styles.infoText}>°C</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.infoText}>Pressure</Text>
                    <Text style={styles.infoText, {fontSize: 24, color: 'white'}}>{props.pressure}</Text>
                    <Text style={styles.infoText}>hPa</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.infoText}>Wind</Text>
                    <Text style={styles.infoText, {fontSize: 24, color: 'white'}}>{props.wind}</Text>
                    <Text style={styles.infoText}>km/h</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.infoText}>humidity</Text>
                    <Text style={styles.infoText, {fontSize: 24, color: 'white'}}>{props.humidity}</Text>
                    <Text style={styles.infoText}>%</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    topFrame: {
        flex: 1,
        color: 'white',
        justifyContent: 'space-between',
    },
    nameText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    tempText: {
        color: 'white',
        fontSize: 80,
    },
    mainText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 34,
        marginLeft: 10,
    },
    weatherIcon: {
        width: 34,
        height: 34,
        backgroundColor: 'grey'
    },
    desText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 10,
    },
    line: {
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        marginTop: 20,
        borderBottomWidth: 1,
    },
    bottomFrame: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginBottom: 50
    },
    detail: {
        alignItems: 'center',
    },
    infoText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    }
});