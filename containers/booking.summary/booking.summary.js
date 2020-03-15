import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView, CheckBox } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../common/button';
import BookingContactDetail from './components/booking.contact.detail';
import BookingPassengerDetail from './components/booking.passenger.info';
import BookingGST from './components/booking.gst';
import BookingWallet from './components/booking.wallets';
import BookingCoupon from './components/booking.coupons';
import Paytm from 'react-native-paytm';


export default function BookingSummary(props) {
    const data = props.route.params.data

    const [isGst, setIsGst] = useState(false)

    const [buttonClicked,setButtonClicked] = useState(false)

    const [contactDetail, setContactDetail] = useState({
        firstName: 'Sunil',
        lastName: 'Kumar',
        mobileNumber: '8861056670',
        Email: 'sonuame@aol.com'
    })

    const [passengerInfo, setPassengerInFo] = useState({
        salute: 'Mr',
        FirstAndLastName: "Owais",
        lastName: "Latif",
        dateOfBirth: "04-03-1995",
    })

    const [gst, setGst] = useState({
        companyName: "",
        gstNumber: '',
        companyAddress: "",
        companyEmail: "",
        contact: "",
        FirstAndMiddleName: "",
        lastName: ""

    })

    const onContactDetailChange = (value, name) => {
        setContactDetail({ ...contactDetail, [name]: value })
    }

    const onPassengerInFoChange = (value, name) => {
        setPassengerInFo({ ...passengerInfo, [name]: value })
    }

    const onGstChange = (value, name) => {
        setGst({ ...gst, [name]: value })
    }

    useEffect(() => {
        if (props.addedUser.size != 0 && buttonClicked) {
            if (props.addedUser.Message) {
                alert(props.addedUser.Message)
            }
            else {
                const blockTickData = {
                    "SearchId": props.selectedFlights.Key,
                    "TripType": data.returnFlight != "" ? data.returnFlight.TripType : data.onWardFlight.TripType,
                    "FlightType": data.returnFlight != "" ? data.returnFlight.FlightType : data.onWardFlight.FlightType,
                    "GstDetails": isGst ? {
                        "GSTCompanyAddress": gst.companyAddress,
                        "GSTCompanyContactNumber": gst.contact,
                        "GSTNumber": gst.gstNumber,
                        "GSTCompanyEmail": gst.companyEmail,
                        "GSTFirstName": gst.FirstAndMiddleName,
                        "GSTLastName": gst.lastName
                    } : null,
                    "City": props.selectedFlights.Airports[1].City,
                    "UserID": props.addedUser.UserId,
                    "Email": contactDetail.Email,
                    "MobileNo": contactDetail.mobileNumber,
                    "MerchantID": null,
                    "Names": [
                        {
                            "Salut": passengerInfo.salute,
                            "PassportRequired": false,
                            "PassportDetails": {
                                "issuePlace": "",
                                "visaType": "",
                                "passportNo": ""
                            },
                            "FirstName": passengerInfo.FirstAndLastName,
                            "LastName": passengerInfo.lastName,
                            "passengerType": "ADT",
                            "DOB": passengerInfo.dateOfBirth,
                            "IdentityExpiry": "2020-03-03T16:56:56.609Z",
                            "Gender": passengerInfo.salute == "Mr" ? "Male" : "Female",
                            "Save": true,
                            "Age": 0,
                            "IdentityNumber": "",
                            "IdentityType": "",
                            "Nationality": "",
                            "ID": 0
                        }],
                    "PassportDetails": null,
                    "Psgrtype": "",
                    "selectionKey": props.flights.SearchID,
                    "Mock": false,
                    "PayByWallet": false
                }
                console.log(blockTickData)
                props.blockTicket(blockTickData)
            }
        }
    }, [props.addedUser])


    useEffect(() => {
        console.log(props.blockTicketData)
    }, [props.blockTicketData])


    useEffect(() => {
        const flights = {
            "SearchId": props.selectedFlights.Key,
            "TripType": data.returnFlight != "" ? data.returnFlight.TripType : data.onWardFlight.TripType,
            "FlightType": data.returnFlight != "" ? data.returnFlight.FlightType : data.onWardFlight.FlightType,
            "GstDetails": isGst ? {
                "GSTCompanyAddress": gst.companyAddress,
                "GSTCompanyContactNumber": gst.contact,
                "GSTNumber": gst.gstNumber,
                "GSTCompanyEmail": gst.companyEmail,
                "GSTFirstName": gst.FirstAndMiddleName,
                "GSTLastName": gst.lastName
            } : null
        }
        props.getFlightFare(flights)
    }, [props.selectedFlights])


    const bookTicket = () => {
        const ticketData = {
            "Email": contactDetail.Email,
            "PhoneNo": contactDetail.mobileNumber,
            "Password": "password123",
            "ConfirmPassword": "password123",
            "RegType": "guest",
            "UserType": 1,
            "FirstName": contactDetail.firstName,
            "LastName": contactDetail.lastName,
            "CreateLogin": false
        }
        console.log(ticketData)
        props.addUser(ticketData)

        const fareData = {
            "SearchId": props.selectedFlights.Key,
            "TripType": data.returnFlight != "" ? data.returnFlight.TripType : data.onWardFlight.TripType,
            "FlightType": data.returnFlight != "" ? data.returnFlight.FlightType : data.onWardFlight.FlightType,
            "GstDetails": isGst ? {
                "GSTCompanyAddress": gst.companyAddress,
                "GSTCompanyContactNumber": gst.contact,
                "GSTNumber": gst.gstNumber,
                "GSTCompanyEmail": gst.companyEmail,
                "GSTFirstName": gst.FirstAndMiddleName,
                "GSTLastName": gst.lastName
            } : null
        }

        props.getFlightFare(fareData)
        setButtonClicked(true)
    }

    const mapping = data.onWardFlight.IntOnward ? data.onWardFlight.IntOnward : data.onWardFlight
    const returnMapping = data.returnFlight.IntReturn ? data.onWardFlight.IntReturn : data.returnFlight

    return (
        <View style={styles.container}>

            <ScrollView>
                <View >
                    <View style={styles.selectFlight}>
                        <View style={styles.pickFlight}>
                            {
                                mapping && mapping.FlightSegments.map((data, index) => {
                                    if (index == 0) {
                                        return <TouchableOpacity>
                                            <View style={styles.flight}>
                                                <Text style={{ textAlign: "center", color: "#9B9B9B" }}>From</Text>
                                                <Text style={{ textAlign: "center", fontSize: 30 }}>{data.ArrivalAirportCode}</Text>
                                                <Text style={{ textAlign: "center" }}>{data.IntArrivalAirportName}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                })

                            }
                        </View>
                        <View style={styles.icons}>
                            <Icon
                                name="plane"
                                backgroundColor="#3b5998"
                                style={{ fontSize: 20 }}
                            > </Icon>
                            {
                                data.returnFlight ?
                                    <Icon
                                        style={{
                                            transform: [{ rotate: '180deg' }],
                                            fontSize: 20

                                        }}
                                        name="plane"
                                        backgroundColor="#3b5998"
                                    ></Icon> : null
                            }
                        </View>
                        <View style={styles.dropFlight}>
                            {
                                mapping && mapping.FlightSegments.map((data, index) => {
                                    return <TouchableOpacity>
                                        <View style={styles.flight}>
                                            <Text style={{ textAlign: "center", color: "#9B9B9B" }}>To</Text>
                                            <Text style={{ textAlign: "center", fontSize: 30 }}>{data.DepartureAirportCode}</Text>
                                            <Text style={{ textAlign: "center" }}>{data.IntDepartureAirportName}</Text>
                                        </View>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </View>
                    <View  >

                        <View style={styles.margin}><Text>
                            {mapping.FlightSegments[0].ArrivalDateTimeZone}
                        </Text></View>
                        {

                            <TouchableOpacity>
                                <View style={styles.list}>
                                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                        <TouchableOpacity onPress={() => {
                                            props.navigation.navigate("FareLaws", {

                                                fareLaws: props.selectedFlights.FareRule
                                            })
                                        }}>
                                            <Text style={{ color: "blue" }}>Show Fare Rule</Text></TouchableOpacity></View>
                                    <View style={styles.listTop}>
                                        <View>
                                            {

                                                <React.Fragment>
                                                    <View><Text style={{ fontWeight: "bold", fontSize: 13 }}>
                                                        {
                                                            mapping.FlightSegments[0].DepartureDateTime.substr(11)
                                                        }
                                                    </Text></View>
                                                    <View><Text style={{ color: "#A6A6A6" }}>
                                                        {data.onWardFlight.RequestDetails.Source}
                                                    </Text></View>
                                                </React.Fragment>


                                            }
                                        </View>
                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            <View><Text style={{ color: "#A6A6A6" }}>
                                                {mapping.FlightSegments[0].Duration}
                                            </Text></View>
                                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ color: "#A6A6A6" }}>- - - - - - - -</Text><View style={styles.ball}></View>
                                                <Text style={{ color: "#A6A6A6" }}>- - - - - - - -  </Text>
                                                <Icon
                                                    name="plane"
                                                    backgroundColor="#3b5998"
                                                    style={{ fontSize: 20 }}
                                                > </Icon>

                                            </View>
                                            <View><Text style={{ color: "#A6A6A6" }}>Non Stop</Text></View>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                                                {mapping.FlightSegments[0].ArrivalDateTime.substr(11)}
                                            </Text>
                                            <Text style={{ color: "#A6A6A6" }}>
                                                {data.onWardFlight.RequestDetails.Destination}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.listBottom}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View>
                                                <Image
                                                    style={{ width: 50, height: 50 }}
                                                    source={{ uri: mapping.FlightSegments[0].AirlineLogo }}
                                                />
                                            </View>
                                            <View style={{ marginLeft: 10 }}>
                                                <View>
                                                    <Text>
                                                        {mapping.FlightSegments[0].AirLineName}
                                                    </Text>
                                                    <Text style={{ color: "#A6A6A6" }}>
                                                        {data.onWardFlight.RequestDetails.Mode}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 20, color: "#E5634D", fontWeight: "bold" }}>
                                                ${data.onWardFlight.FareDetails.ChargeableFares.NetFare}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                    {
                        data.returnFlight || data.returnFlight.length != 0 ?
                            <View >
                                <View style={styles.margin}><Text >
                                    {returnMapping.FlightSegments[0].ArrivalDateTimeZone}
                                </Text></View>
                                {
                                    <TouchableOpacity>
                                        <View style={styles.list}>
                                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                                <TouchableOpacity onPress={() => {
                                                    props.navigation.navigate("FareLaws", {
                                                        fareLaws: props.selectedFlights.FareRuleReturn
                                                    })
                                                }}>
                                                    <Text style={{ color: "blue" }}>Show Fare Rule</Text>
                                                </TouchableOpacity></View>

                                            <View style={styles.listTop}>
                                                <View>
                                                    {

                                                        <React.Fragment>
                                                            <View><Text style={{ fontWeight: "bold", fontSize: 13 }}>
                                                                {
                                                                    returnMapping.FlightSegments[0].DepartureDateTime.substr(11)
                                                                }
                                                            </Text></View>
                                                            <View><Text style={{ color: "#A6A6A6" }}>
                                                                {data.returnFlight.RequestDetails.Destination}
                                                            </Text></View>
                                                        </React.Fragment>


                                                    }
                                                </View>
                                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <View><Text style={{ color: "#A6A6A6" }}>
                                                        {returnMapping.FlightSegments[0].Duration}
                                                    </Text></View>
                                                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>


                                                        <Text style={{ color: "#A6A6A6" }}>- - - - - - - -</Text><View style={styles.ball}></View>
                                                        <Text style={{ color: "#A6A6A6" }}>- - - - - - - -  </Text>

                                                        <Icon
                                                            name="plane"
                                                            backgroundColor="#3b5998"
                                                            style={{ fontSize: 20 }}

                                                        > </Icon>
                                                    </View>
                                                    <View><Text style={{ color: "#A6A6A6" }}>Non Stop</Text></View>
                                                </View>
                                                <View>
                                                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                                                        {returnMapping.FlightSegments[0].ArrivalDateTime.substr(11)}
                                                    </Text>
                                                    <Text style={{ color: "#A6A6A6" }}>
                                                        {data.returnFlight.RequestDetails.Source}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.listBottom}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <View>
                                                        <Image
                                                            style={{ width: 50, height: 50 }}
                                                            source={{ uri: returnMapping.FlightSegments[0].AirlineLogo }}
                                                        />
                                                    </View>
                                                    <View style={{ marginLeft: 10 }}>
                                                        <View>
                                                            <Text>
                                                                {returnMapping.FlightSegments[0].AirLineName}
                                                            </Text>
                                                            <Text style={{ color: "#A6A6A6" }}>
                                                                {data.returnFlight.RequestDetails.Mode}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 20, color: "#E5634D", fontWeight: "bold" }}>
                                                        ${data.returnFlight.FareDetails.ChargeableFares.NetFare}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View> : null
                    }


                </View>
                <View style={{ paddingTop: 10 }}>
                    <BookingContactDetail contactDetail={contactDetail} onContactDetailChange={onContactDetailChange} />
                </View>
                <View style={{ paddingTop: 10 }}>
                    <BookingPassengerDetail onPassengerInFoChange={onPassengerInFoChange} passengerInfo={passengerInfo} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}>
                    <CheckBox
                        value={isGst}
                        onValueChange={() => setIsGst(!isGst)}

                    />
                    <Text>Add GST</Text>
                </View>
                {
                    isGst ?
                        <View>
                            <BookingGST onGstChange={onGstChange} />
                        </View> : null
                }
                <View style={{ paddingTop: 10 }}>
                    <BookingWallet />
                </View>

                <View style={{ paddingTop: 10 }}>
                    <BookingCoupon />
                </View>


                <View style={{ ...styles.bottomDetails, paddingTop: 10 }}>
                    <View>
                        <Text style={{ color: "#A6A6A6" }}>Total Price</Text>
                        {
                            data.returnFlight || data.returnFlight.length != 0 ?
                                props.flightFareLoading || props.selectedFlightsLoading ? <ActivityIndicator /> :
                                    <Text style={{ fontSize: 20, color: "#E5634D", fontWeight: "bold" }}>
                                        {/* ${props.flightFare ? (props.flightFare.ChargeableFaresOnward.NetFare + props.flightFare.ChargeableFaresReturn.NetFare) : null} */}
                                        {Number(props.flightFare && props.flightFare.ChargeableFaresOnward && props.flightFare.ChargeableFaresOnward.NetFare) + Number(props.flightFare && props.flightFare.ChargeableFaresReturn && props.flightFare.ChargeableFaresReturn.NetFare)}
                                    </Text> : null


                        }
                        {
                            !data.returnFlight || data.returnFlight.length == 0 ?
                                props.flightFareLoading || props.selectedFlightsLoading ? <ActivityIndicator /> :
                                    <Text style={{ fontSize: 20, color: "#E5634D", fontWeight: "bold" }}>
                                        {
                                            props.flightFare && props.flightFare.ChargeableFaresOnward && props.flightFare.ChargeableFaresOnward.NetFare
                                        }
                                    </Text> : null
                        }
                        <Text style={{ color: "#A6A6A6" }}>All Charges Included</Text>
                    </View>
                    <View>
                        <CustomButton title="Book Now" backgroundColor="#E5634D"
                            onPress={() => bookTicket()}
                        ></CustomButton>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
        justifyContent: "space-between"
    },
    flight: {
        justifyContent: "center"
    },
    selectFlight: {
        flexDirection: "row",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        paddingBottom: 15
    },
    pickFlight: {
        flex: 1
    },
    icons: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    dropFlight: {
        flex: 1
    },
    list: {
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
    margin: {
        marginTop: 15
    },
    bottomDetails: {
        flexDirection: "row",
        justifyContent: "space-between",

    }


})