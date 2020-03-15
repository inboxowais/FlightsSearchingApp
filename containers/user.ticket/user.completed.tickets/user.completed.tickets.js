import React, { useEffect } from 'react'
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native'
import Tickets from './../components/tickets'

export default function UserCompletedTickets(props) {
    useEffect(() => {
        AsyncStorage.getItem('AuthToken').then((token) => {
            if (token) {
                props.getCompletedFlights(
                    {
                        data: props.auth.User.UserId,
                        token: token
                    })
            }
        });
        console.log(props)
    }, [])

    return (
        <View>
            {
                props && props.completedFlightsLoading ? <ActivityIndicator /> :
                props && props.completedFlights && props.completedFlights.data &&  props.completedFlights.data.length == 0 ? <Text style = {{textAlign:"center"}}>No Data Found</Text> :
                    props && props.completedFlights && props.completedFlights.data && props.completedFlights.data.map((data, index) => {
                        console.log(data.length)
                        return <Tickets
                            key={index}
                            bookingId={data.BookingID}
                            arrivalDateTime={data.OnwardFlightSegments[0].ArrivalDateTimeZone}
                            departureDateTime={data.OnwardFlightSegments[0].DepartureDateTimeZone}
                            departureAirPort={data.OnwardFlightSegments[0].IntDepartureAirportName}
                            intArrivalAirportName={data.OnwardFlightSegments[0].IntArrivalAirportName}
                            AirlineLogo={data.OnwardFlightSegments[0].AirlineLogo}
                            duration={data.OnwardFlightSegments[0].Duration}
                            returnArrivalDateTime={data.ReturnFlightSegments[0].ArrivalDateTimeZone}
                            returnDepartureDateTime={data.ReturnFlightSegments[0].DepartureDateTimeZone}
                            returnDepartureAirPort={data.ReturnFlightSegments[0].IntDepartureAirportName}
                            returnIntArrivalAirportName={data.ReturnFlightSegments[0].IntArrivalAirportName}
                            returnAirlineLogo={data.ReturnFlightSegments[0].AirlineLogo}
                            returnDuration={data.ReturnFlightSegments[0].Duration}

                        />
                    })

            }
        </View>
    )
}
