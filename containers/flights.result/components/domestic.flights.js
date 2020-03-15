import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CustomButton from './../../common/button'


export default function DomesticFlights(props) {

    const [flightType, setFlightType] = useState({
        onWardFlight: "",
        returnFlight: ""
    })
    const [proceedButton, setProceedButton] = useState(false)
    const flights = props.flights

    const handleClick = (valur) => {
     
        const data = {
            "flightType": 1,
            "travelClass": props.request.class.code,
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
            "tripType": 1,
            "searchID": flights.searchID,
            "selection": {
                "DomesticOnward": {
                    "FareDetails": {
                        "ChargeableFares": {
                            "ActualBaseFare": flightType.onWardFlight.FareDetails.ChargeableFares.ActualBaseFare,
                            "Tax": flightType.onWardFlight.FareDetails.ChargeableFares.Tax,
                            "STax": flightType.onWardFlight.FareDetails.ChargeableFares.STax,
                            "SCharge": flightType.onWardFlight.FareDetails.ChargeableFares.SCharge,
                            "TDiscount": flightType.onWardFlight.FareDetails.ChargeableFares.TDiscount,
                            "TPartnerCommission": flightType.onWardFlight.FareDetails.ChargeableFares.TPartnerCommission,
                            "NetFare": flightType.onWardFlight.FareDetails.ChargeableFares.NetFare,
                            "Conveniencefee": flightType.onWardFlight.FareDetails.ChargeableFares.Conveniencefee,
                            "ConveniencefeeType": flightType.onWardFlight.FareDetails.ChargeableFares.ConveniencefeeType,
                            "PartnerFareDatails": flightType.onWardFlight.FareDetails.ChargeableFares.PartnerFareDatails
                        },
                        "NonchargeableFares": flightType.onWardFlight.FareDetails.NonchargeableFares,
                        "FareBreakUp": flightType.onWardFlight.FareDetails.FareBreakUp,
                        "OcTax": flightType.onWardFlight.FareDetails.OcTax,
                        "Bonus": flightType.onWardFlight.FareDetails.Bonus,
                        "TotalFare": flightType.onWardFlight.FareDetails.TotalFare,
                        "ResponseStatus": flightType.onWardFlight.FareDetails.ResponseStatus,
                        "Status": flightType.onWardFlight.FareDetails.Status,
                        "Message": flightType.onWardFlight.FareDetails.Message
                    },
                    "FlightSegments": flightType.onWardFlight.FlightSegments,
                    "OriginDestinationoptionId": flightType.onWardFlight.OriginDestinationoptionId,
                    "RequestDetails": flightType.onWardFlight.RequestDetails,
                    "Provider": flightType.onWardFlight.Provider,
                    "IntOnward": flightType.onWardFlight.IntOnward,
                    "IntReturn": flightType.onWardFlight.IntReturn,
                    "IntMulti": flightType.onWardFlight.IntMulti,
                    "AffiliateId": flightType.onWardFlight.AffiliateId,
                    "PartnerID": flightType.onWardFlight.PartnerID,
                    "IsLCC": flightType.onWardFlight.IsLCC,
                    "IsGSTMandatory": flightType.onWardFlight.IsGSTMandatory,
                    "IsHoldAllowed": flightType.onWardFlight.IsHoldAllowed,
                    "ID": flights.ID,
                    "Airports": [],
                    "FlightUId": flightType.onWardFlight.FlightUId,
                    "AirlineRemark": "",
                    "Index": 0,
                    "Selected": true
                }
            },
            "key": ""
        }



        props.data.selectFlight(data)
         props.navigate(flightType)
    }

    const setFlightTypeData = (data, name) => {
        setFlightType({ ...flightType, onWardFlight: data })

    }

    useEffect(() => {
        if (flightType.onWardFlight != "") {
            setProceedButton(true)
        }
    }, [flightType])



    return (
        <View style={styles.container}>
            {
                proceedButton ?
                    <View style={{ position: "absolute", bottom: 5, zIndex: 100, right: 5, width: 200 }}>
                        <CustomButton
                            onPress={() => handleClick(true)}
                            title="Proceed"
                            backgroundColor={"#E5634D"}
                            color={"#ffffff"}
                            borderColor={"#ffffff"}

                        />
                    </View> : null
            }
            <View>
                <ScrollView>
                    {
                           flights && flights.DomesticOnwardFlights == null || flights.DomesticOnwardFlights.length == 0 ?
                            <View
                                style={{ justifyContent: "center", alignContent: "center", flex: 1, flexDirection: "row", paddingTop: 30 }}
                            ><Text>No Data Found On the Selected Route</Text></View> :
                            flights && flights.DomesticOnwardFlights && flights.DomesticOnwardFlights.map((data, index) => {
                                return <TouchableOpacity
                                    key={index}
                                    onPress={() => setFlightTypeData(data, "onWardFlight")}
                                >
                                    <View style={styles.list}>
                                        {
                                            data.FlightSegments.map((data, index) => {
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
                                            })
                                        }
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            {
                                                data.FlightSegments.map((data, index) => {
                                                    return <View key={index}>
                                                        <Image
                                                            source={{ uri: data.AirlineLogo }}
                                                            style={{ width: 50, height: 50 }} />
                                                    </View>
                                                })
                                            }
                                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                {/* <Text>{data.FareDetails.ChargeableFares.NetFare}</Text> */}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            })
                    }
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
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

    }
})

