import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon Sawan', code: '60000' },
    { place: 'Pathumthani', code: '12000'}

]

const ZipItem = ({place, code, navigation}) => (
    
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        
        <View>
            <View style={styles.ZipItem}>
                <Text style={styles.text}>{place}</Text>
                <Text style={styles.text}>{code}</Text>
            </View>
            <View style={styles.line}></View>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>City</Text>
                <Text style={styles.headerText}>Zip code</Text>
            </View>
            <View style={styles.line_header}></View>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white'
      
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    }, 
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
    },
    line: {
        borderBottomColor: 'rgba(255, 255, 255, 0.01)',
        marginTop: 1,
        borderBottomWidth: 1,
    },
    line_header: {
        borderBottomColor: 'rgba(255, 255, 255, 0.05)',
        marginTop: 1,
        borderBottomWidth: 2,
    }
})