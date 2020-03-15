import React, { useEffect,useState } from 'react'
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native'
import Tickets from './../components/tickets'

export default function UserUpcomingTickets(props) {
    const [token,setToken] = useState(false)
    const [userId,setUserId] = useState(false)
    useEffect(() => {

        AsyncStorage.getItem('AuthToken').then((token) => {
            if (token) {
                props.getUpComingFlights(
                    {
                        data: props.auth.User.UserId,
                        token: token
                    })
                setToken(token)
            }
        });
       
    }, [])
    return (
        <View>
            {
                props && props.upComingTIcketsLoading ? <ActivityIndicator /> :
                props && props.upComingTickets && props.upComingTickets.data && props.upComingTickets.data == 0 ? <Text>No Data Found</Text> :
                    props && props.upComingTickets && props.upComingTickets.data && props.upComingTickets.data.map((data, index) => {
                        return <Tickets
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
