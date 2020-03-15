import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import DomesticFlights from './components/domestic.flights'
import DomesticReturnFlights from './components/domestic.return.flights'
import InternationFlights from './components/internation.flights'
import InternationReturnFlights from './components/international.return.flights'

export default function FlightsResult(props) {


    const [flightsLoading, setFlightsLoading] = useState(props.flightsSearching)

    useEffect(() => {
        props.navigation.setOptions({ title: props.route.params.data.source + " TO " + props.route.params.data.destination })

    }, [])


    const navigate = (flights) => {
        props.navigation.navigate("BookingSummary", { data: flights })
    }
    const data = props.route.params.data;
    return (
        props.flightsSearching ? <ActivityIndicator /> :
            <View style={styles.container}>
                {
                    data.tripType == 1 && data.isDomesticFight == true ?
                        <DomesticFlights flights={props.flightsResult} data={props} request={props.route.params.data} navigate={navigate} /> :
                        data.tripType == 2 && data.isDomesticFight == true ?
                            <DomesticReturnFlights flights={props.flightsResult} data={props} request={props.route.params.data} navigate={navigate} /> :
                            data.tripType == 1 && data.isDomesticFight == false ?
                                <InternationFlights flights={props.flightsResult} data={props} request={props.route.params.data} navigate={navigate} /> :
                                data.tripType == 2 && data.isDomesticFight == false ?
                                    <InternationReturnFlights flights={props.flightsResult} data={props} request={props.route.params.data} navigate={navigate} /> :
                                    null
                }
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10
    },
    topButton: {
        flexDirection: "row",
    },
    button: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "green",
        borderRadius: 100,
        flex: 1,
        borderWidth: 1,
        borderColor: '#E5634D',
    }
})


