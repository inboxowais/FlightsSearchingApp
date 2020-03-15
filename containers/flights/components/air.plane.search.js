import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-material-ui';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AirPlaneSearch(props) {


    useEffect(() => {
           props.getAirPorts()
    }, [])

    const handleClick = (data) => {
        if(props.route.params.isRoundedTrip == "source") {
           props.setSoure(data)
           props.navigation.navigate("flight")
        }
        else {
           props.setDestination(data)
           props.navigation.navigate("flight")
        }
    }

    return (
        <View style={styles.container}>
            {
                props.airPortsLoading ? <ActivityIndicator /> :
                    <ScrollView>
                        {
                            props.airPorts && props.airPorts && props.airPorts.map((data, index) => {
                                return <TouchableOpacity key = {index} onPress = {() => handleClick(data)}><ListItem
                                    divider
                                    centerElement={{
                                        primaryText: data.City + "(" + data.AirportCode + ")",
                                        secondaryText: data.AirportDesc
                                    }}
                                /></TouchableOpacity>
                            })
                        }
                    </ScrollView>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10
    }
})

