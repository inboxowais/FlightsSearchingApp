import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../common/button';


export default function InternationReturnFlights(props) {

    const flights = props.flights
    const [flightType, setFlightType] = useState({
        onWardFlight: "",
        returnFlight: ""
    })
    const [isOnWardsFlights, setIsOnWardsFlights] = useState(true)
    const [proceedButton, showProceedButton] = useState(false)

    const handleClick = (valur) => {
        setIsOnWardsFlights(valur)
    }

    const setFlightTypeData = (data, name) => {
        setFlightType({ ...flightType, [name]: data })

        if (name == "onWardFlight") {
            setIsOnWardsFlights(false)
        }
    }

    useEffect(() => {
        if (flightType.onWardFlight != "" && flightType.returnFlight != "") {
            showProceedButton(true)
        }
    }, [flightType])

    const handleProceed = (handleProceed) => {
           const data = {
            "flightType": 2,
            "travelClass": "E",
            "flightRequest": {
                "adults": props.request.adults,
                "children": props.request.children,
                "destination": props.request.destination,
                "flightType": props.request.flightType,
                "infants": props.request.infants,
                "journeyDate": props.request.departureDate,
                "returnDate": props.request.arrivalDate,
                "source": props.request.source,
                "travelClass": props.request.class.code,
                "tripType": props.request.tripType,
                "userType": 5
            },
            "tripType": 2,
            "searchID": flights.searchID,
            "selection": {
              "InternationalOnward": {
                "FareDetails": flightType.onWardFlight.FareDetails,
                "FlightSegments": flightType.onWardFlight.IntOnward.FlightSegments,
                "OriginDestinationoptionId": flightType.onWardFlight.OriginDestinationoptionId,
                "RequestDetails":  flightType.onWardFlight.RequestDetails,
                "Provider":  flightType.onWardFlight.Provider,
                "IntOnward": null,
                "IntReturn": {
                  "FlightSegments": flightType.onWardFlight.IntReturn.FlightSegments,
                  "DurationMinutes": 930
                },
                "IntMulti": null,
                "FlightType": 2,
                "TripType": 2,
                "AffiliateId": null,
                "PartnerID": null,
                "IsLCC": false,
                "IsGSTMandatory": false,
                "GSTMandatory": false,
                "IsHoldAllowed": true,
                "ID": null,
                "Airports": null,
                "FlightUId": "ET-0",
                "AirlineRemark": "",
                "TotalFare": 39749,
                "DurationMinutes": 930,
                "RPH": ""
              },
              "InternationalReturn": {
                "FareDetails":flightType.onWardFlight.FareDetails ,
                "FlightSegments":flightType.returnFlight.IntReturn.FlightSegments ,
                "OriginDestinationoptionId": flightType.returnFlight.OriginDestinationoptionId,
                "RequestDetails":flightType.returnFlight.RequestDetails,
                "Provider": flightType.onWardFlight.Provider,
                "IntOnward": {
                  "FlightSegments": flightType.onWardFlight.IntReturn.FlightSegments,
                  "DurationMinutes": 680
                },
                "IntReturn": null,
                "IntMulti": null,
                "FlightType": 2,
                "TripType": 2,
                "AffiliateId": null,
                "PartnerID": null,
                "IsLCC": false,
                "IsGSTMandatory": false,
                "GSTMandatory": false,
                "IsHoldAllowed": true,
                "ID": null,
                "Airports": null,
                "FlightUId": "ET-0",
                "AirlineRemark": "",
                "TotalFare": 39749,
                "DurationMinutes": 930,
                "RPH": ""
              }
            },
            "key": ""
          }
          props.data.selectFlight(data)
          props.navigate(flightType)
    }


    return (
        <React.Fragment>
            {
                proceedButton ?
                    <View style={{ position: "absolute", bottom: 5, zIndex: 100, right: 5, width: 200 }}>
                        <CustomButton
                            onPress={() => handleProceed(true)}
                            title="Proceed"
                            backgroundColor={"#E5634D"}
                            color={"#ffffff"}
                            borderColor={"#ffffff"}
                        />
                    </View> : null
            }
            <View style={{ flexDirection: "row" }}>

                <View style={{ flexGrow: 1 }}><CustomButton
                    onPress={() => handleClick(true)}
                    title="Onwards Flights"
                    backgroundColor={isOnWardsFlights ? "#E5634D" : "transparent"}
                    color={isOnWardsFlights ? "#ffffff" : "#E5634D"}
                    borderColor={isOnWardsFlights ? "#ffffff" : "#E5634D"}
                /></View>
                <View style={{ flexGrow: 1 }}><CustomButton
                    onPress={() => handleClick(false)}
                    title="Return Flights"
                    backgroundColor={!isOnWardsFlights ? "#E5634D" : "transparent"}
                    color={!isOnWardsFlights ? "#ffffff" : "#E5634D"}
                    borderColor={!isOnWardsFlights ? "#ffffff" : "#E5634D"}

                /></View>
            </View>


            <View style={styles.container}>
                {
                    isOnWardsFlights ?
                        <View>
                            <ScrollView>
                                {
                                    flights && flights.InternationalFlights == null || flights && flights.InternationalFlights && flights.InternationalFlights.length == 0 ?
                                        <View
                                            style={{ justifyContent: "center", alignContent: "center", flex: 1, flexDirection: "row", paddingTop: 30 }}
                                        ><Text>No Data Found On the Selected Route</Text></View> :
                                        flights && flights.InternationalFlights.map((data, index) => {
                                            return <TouchableOpacity key={index} onPress={() => setFlightTypeData(data, "onWardFlight")}>
                                                <View style={styles.list}>
                                                    {
                                                        data.IntOnward.FlightSegments.map((data, index) => {
                                                            if (index == 0) {
                                                                return <View>
                                                                    <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>{data.AirLineName}</Text></View>
                                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                                        <View><Text>{
                                                                            data.DepartureDateTimeZone.substring(10)
                                                                        }</Text></View>
                                                                        <View><Text>
                                                                            TO
                                                        </Text></View>
                                                                        <View><Text>{
                                                                            data.ArrivalDateTimeZone.substring(10)
                                                                        }</Text></View>
                                                                    </View>
                                                                </View>
                                                            }
                                                        })
                                                    }
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                        {
                                                            data.IntOnward.FlightSegments.map((data, index) => {
                                                                if (index == 0) {
                                                                    return <View key={index}>
                                                                        <Image
                                                                            source={{ uri: data.AirlineLogo }}
                                                                            style={{ width: 50, height: 50 }} />
                                                                    </View>
                                                                }
                                                            })
                                                        }
                                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                            <Text>{data.FareDetails.ChargeableFares.NetFare}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        })
                                }
                            </ScrollView>
                        </View> :
                        <View>

                            <ScrollView>
                                {
                                    flights && flights.InternationalFlights == null || flights && flights.InternationalFlights && flights.InternationalFlights.length == 0 ?
                                        <View
                                            style={{ justifyContent: "center", alignContent: "center", flex: 1, flexDirection: "row", paddingTop: 30 }}
                                        ><Text>No Data Found On the Selected Route</Text></View> :
                                        flights && flights.InternationalFlights.map((data, index) => {

                                            return <TouchableOpacity key={index} onPress={() => setFlightTypeData(data, "returnFlight")}>
                                                <View style={styles.list}>
                                                    {
                                                        data.IntReturn.FlightSegments.map((data, index) => {
                                                            if (index == 0) {
                                                                return <View>
                                                                    <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>{data.AirLineName}</Text></View>
                                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                                        <View><Text>{
                                                                            data.DepartureDateTimeZone.substring(10)
                                                                        }</Text></View>
                                                                        <View><Text>
                                                                            TO
                                                    </Text></View>
                                                                        <View><Text>{
                                                                            data.ArrivalDateTimeZone.substring(10)
                                                                        }</Text></View>
                                                                    </View>
                                                                </View>
                                                            }
                                                        })
                                                    }
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                        {
                                                            data.IntReturn.FlightSegments.map((data, index) => {
                                                                if (index == 0) {
                                                                    return <View key={index}>
                                                                        <Image
                                                                            source={{ uri: data.AirlineLogo }}
                                                                            style={{ width: 50, height: 50 }} />
                                                                    </View>
                                                                }
                                                            })
                                                        }
                                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                            <Text>{data.FareDetails.ChargeableFares.NetFare}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        })
                                }
                            </ScrollView>
                        </View>
                }
            </View>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    proceedButton: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10
    },
    filter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        borderBottomColor: "#A6A6A6",
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    list: {
        marginTop: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 20,
        padding: 10
    },
    listTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#A6A6A6",
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    listBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10
    },
    ball: {
        width: 15,
        height: 15,
        backgroundColor: "#E5634D",
        borderRadius: 100,
        marginLeft: 10,
        marginRight: 10,
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

