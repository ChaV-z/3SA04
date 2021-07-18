import React from 'react'
import { View, Text, StyleSheet } from 'react-native'  

export default function Forecast(props) {
    return (
        <View style={styles.bg}>
            <View style={styles.topFrame}>
                <View>
                    <Text style={styles.nameText}>{props.name}</Text>
                </View>
                <View>
                    <Text style={styles.tempText}>{props.temp} °C</Text>
                    <View>
                        <Text style={styles.mainText}>{props.main}</Text>
                    </View>
                    <Text style={styles.desText}>{props.description}</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.detail}></View>
        </View>
        //     <Text style={styles.mainText}>{props.main}</Text>
        //     <Text style={styles.desText}>{props.description}</Text>
        //     <View style={styles.cel}>
        //         <Text style={styles.tempText}>{props.temp}</Text>
        //         <Text style={styles.cText}> °C</Text>
        //     </View>
        //     <Text>{props.feels_like}</Text>
        //     <Text>°C</Text>
        //     <Text>Pressure</Text>
        //     <Text>{props.pressure}</Text>
        //     <Text>hPa</Text>
        //     <Text>Wind</Text>
        //     <Text>{props.wind}</Text>
        //     <Text>km/h</Text>
        //     <Text>Humidity</Text>
        //     <Text>{props.humidity}</Text>
        //     <Text>%</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20,
    },
    topFrame: {
        flex: 1,
        marginTop: 160,
        color: 'white',
        justifyContent: 'space-between',
    },
    nameText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    tempText: {
        color: '#fff',
        fontSize: 85,
    },
    mainText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 34,
        marginLeft: 10,
    },
    desText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 10,
    },
    line: {
        borderBottomColor: 'rgba(255, 255, 255, 0.7)',
        marginTop: 20,
        borderBottomWidth: 1,
    },
  
    // mainText: {
    //     width: '100%',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     fontSize: 30,
    //     paddingBottom: 30
    // },
    // desText:{
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     paddingBottom: 30
    // },
    // cel:{
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     paddingBottom: 20
    // },
    // tempText: {
    //     fontSize: 30,
    // },
    // cText: {
    //     textAlignVertical: 'center'
    // }

});