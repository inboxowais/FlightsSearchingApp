import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function Tickets(props) {
    const {
        bookingId,
        arrivalDateTime,
        departureDateTime,
        departureAirPort,
        intArrivalAirportName,
        AirlineLogo,
        returnArrivalDateTime,
        returnDepartureDateTime,
        returnDepartureAirPort,
        returnIntArrivalAirportName,
        returnAirlineLogo,
        duration,
        returnDuration

    } = props
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>Onwards</Text>
                <Text>{bookingId}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <View>
                        <Text>{departureDateTime.substring(11)}</Text>
                    </View>
                    <View>
                        <Text>{departureDateTime.substring(0, 11, -8)}</Text>
                    </View>
                    <View>
                        <Text>{departureAirPort}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={{ uri: AirlineLogo }} style={{ width: 40, height: 40 }} />
                    <Text>{duration}</Text>
                </View>
                <View>
                    <View>
                        <Text>{arrivalDateTime.substring(11)}</Text>
                    </View>
                    <View>
                        <Text>{arrivalDateTime.substring(0, 11, -8)}</Text>
                    </View>
                    <View>
                        <Text>{intArrivalAirportName}</Text>
                    </View>
                </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>Return</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <View>
                        <Text>{returnDepartureDateTime.substring(11)}</Text>
                    </View>
                    <View>
                        <Text>{returnDepartureDateTime.substring(0, 11, -8)}</Text>
                    </View>
                    <View>
                        <Text>{returnDepartureAirPort}</Text>
                    </View>
                </View>
                <View style = {{justifyContent:"center",alignItems:"center"}}>
                    <Image source={{ uri: returnAirlineLogo }} style={{ width: 40, height: 40 }} />
                    <Text>{returnDuration}</Text>
                </View>
                <View>
                    <View>
                        <Text>{returnArrivalDateTime.substring(11)}</Text>
                    </View>
                    <View>
                        <Text>{returnArrivalDateTime.substring(0, 11, -8)}</Text>
                    </View>
                    <View>
                        <Text>{returnIntArrivalAirportName}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        borderWidth: 1,
        borderColor: "#000000",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        justifyContent: "space-between"
    }
})

