import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.ZipItem}>
            <ImageBackground source={require('../images/bg1.jpg')} style={styles.backdrop}>
                <Text>{place}</Text>
                <Text>{code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <FlatList 
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    backdrop: {
        // alignItems: 'center',
        // flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        flex:1,
    },
    zipCode: {
        flex: 1,
    },
})