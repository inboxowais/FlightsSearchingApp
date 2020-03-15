import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../common/button';

export default function DomesticReturnFlights(props) {

  const [flights, setFlights] = useState(props.flights)
  const [flightType, setFlightType] = useState({
    onWardFlight: "",
    returnFlight: ""
  })
  const [isOnWardsFlights, setIsOnWardsFlights] = useState(true)
  const [proceedButton, showProceedButton] = useState(false)


  useEffect(() => {
    setFlights(props.flights)
  }, [props.flights])

 
  const handleClick = (valur) => {


    const data = {
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
      "flightType": 1,
      "tripType": 2,
      "searchID": flights.searchID,
      "selection": {
        "DomesticOnward": {
          "FareDetails": flightType.onWardFlight.FareDetails,
          "FlightSegments": [flightType.onWardFlight.FlightSegments[0]],
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
          "ID": flightType.onWardFlight.ID,
          "Airports": flightType.onWardFlight.Airports,
          "FlightUId": flightType.onWardFlight.FlightUId,
          "AirlineRemark": flightType.onWardFlight.AirlineRemark,
          "Selected": true,
          "Index": 0
        },
        "DomesticReturn": {
          "FareDetails": {
            "ChargeableFares": {
              "ActualBaseFare": flightType.returnFlight.FareDetails.ChargeableFares.ActualBaseFare,
              "Tax": flightType.returnFlight.FareDetails.ChargeableFares.Tax,
              "STax": flightType.returnFlight.FareDetails.ChargeableFares.STax,
              "SCharge": flightType.returnFlight.FareDetails.ChargeableFares.SCharge,
              "TDiscount": flightType.returnFlight.FareDetails.ChargeableFares.TDiscount,
              "TPartnerCommission": flightType.returnFlight.FareDetails.ChargeableFares.TPartnerCommission,
              "NetFare": flightType.returnFlight.FareDetails.ChargeableFares.NetFare,
              "Conveniencefee": flightType.returnFlight.FareDetails.ChargeableFares.Conveniencefee,
              "ConveniencefeeType": flightType.returnFlight.FareDetails.ChargeableFares.ConveniencefeeType,
              "PartnerFareDatails": flightType.returnFlight.FareDetails.ChargeableFares.PartnerFareDatails
            },
            "NonchargeableFares": flightType.returnFlight.FareDetails.NonchargeableFares,
            "FareBreakUp": flightType.returnFlight.FareDetails.FareBreakUp,
            "OcTax": flightType.returnFlight.FareDetails.OcTax,
            "Bonus": flightType.returnFlight.FareDetails.Bonus,
            "TotalFare": flightType.returnFlight.FareDetails.TotalFare,
            "ResponseStatus": flightType.returnFlight.FareDetails.ResponseStatus,
            "Status": flightType.returnFlight.FareDetails.Status,
            "Message": flightType.returnFlight.FareDetails.Message
          },
          "FlightSegments": flightType.returnFlight.FlightSegments,
          "OriginDestinationoptionId": flightType.returnFlight.OriginDestinationoptionId,
          "RequestDetails": flightType.returnFlight.RequestDetails,
          "Provider": flightType.returnFlight.Provider,
          "IntOnward": flightType.returnFlight.IntOnward,
          "IntReturn": flightType.returnFlight.IntReturn,
          "IntMulti": flightType.returnFlight.IntMulti,
          "AffiliateId": flightType.returnFlight.AffiliateId,
          "PartnerID": flightType.returnFlight.PartnerID,
          "IsLCC": flightType.returnFlight.IsLCC,
          "IsGSTMandatory": flightType.returnFlight.IsGSTMandatory,
          "IsHoldAllowed": flightType.returnFlight.IsHoldAllowed,
          "ID": flights.ID,
          "Airports": [],
          "FlightUId": flightType.returnFlight.FlightUId,
          "AirlineRemark": "",
          "Index": 1,
          "Selected": true
        }
      },
      "key": ""
    }

  
      props.data.selectFlight(data)
    
     props.navigate(flightType)
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

  const handleButtonClick = (value) => {
    setIsOnWardsFlights(value)
  }



  return (
    <React.Fragment>
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
      <View style={{ flexDirection: "row" }}>

        <View style={{ flexGrow: 1 }}><CustomButton
          onPress={() => handleButtonClick(true)}
          title="Onwards Flights"
          backgroundColor={isOnWardsFlights ? "#E5634D" : "transparent"}
          color={isOnWardsFlights ? "#ffffff" : "#E5634D"}
          borderColor={isOnWardsFlights ? "#ffffff" : "#E5634D"}
        /></View>
        <View style={{ flexGrow: 1 }}><CustomButton
          onPress={() => handleButtonClick(false)}
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
                  flights && flights.DomesticOnwardFlights == null || flights && flights.DomesticOnwardFlights && flights.DomesticOnwardFlights.length == 0 ?
                    <View
                      style={{ justifyContent: "center", alignContent: "center", flex: 1, flexDirection: "row", paddingTop: 30 }}
                    ><Text>No Data Found On the Selected Route</Text></View> :
                    flights && flights.DomesticOnwardFlights.map((data, index) => {
                      return <TouchableOpacity key={index} onPress={() => setFlightTypeData(data, "onWardFlight")}>
                        <View style={styles.list}>
                          {
                            data && data.FlightSegments && data.FlightSegments.map((data, index) => {
                              if (index == 0) {
                                return <View>
                                  <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>{data && data.AirLineName}</Text></View>
                                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View><Text>{
                                      data && data.DepartureDateTimeZone.substring(10)
                                    }</Text></View>
                                    <View><Text>
                                      TO
                                                        </Text></View>
                                    <View><Text>{
                                      data && data.ArrivalDateTimeZone.substring(10)
                                    }</Text></View>
                                  </View>
                                </View>
                              }
                            })
                          }
                          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {
                              data && data.FlightSegments.map((data, index) => {
                                if (index == 0) {
                                  return <View key={index}>
                                    <Image
                                      source={{ uri: data && data.AirlineLogo }}
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
                  flights && flights.DomesticReturnFlights == null || flights && flights.DomesticReturnFlights && flights.DomesticReturnFlights.length == 0 ?
                    <View
                      style={{ justifyContent: "center", alignContent: "center", flex: 1, flexDirection: "row", paddingTop: 30 }}
                    ><Text>No Data Found On the Selected Route</Text></View> :
                    flights && flights.DomesticReturnFlights.map((data, index) => {

                      return <TouchableOpacity key={index} onPress={() => setFlightTypeData(data, "returnFlight")}>
                        <View style={styles.list}>
                          {
                            data && data.FlightSegments.map((data, index) => {
                              if (index == 0) {
                                return <View>
                                  <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>{data.AirLineName}</Text></View>
                                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View><Text>{
                                      data && data.DepartureDateTimeZone.substring(10)
                                    }</Text></View>
                                    <View><Text>
                                      TO
                                                    </Text></View>
                                    <View><Text>{
                                      data && data.ArrivalDateTimeZone.substring(10)
                                    }</Text></View>
                                  </View>
                                </View>
                              }
                            })
                          }
                          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {
                              data && data.FlightSegments.map((data, index) => {
                                if (index == 0) {
                                  return <View key={index}>
                                    <Image
                                      source={{ uri: data && data.AirlineLogo }}
                                      style={{ width: 50, height: 50 }} />
                                  </View>
                                }
                              })
                            }
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                              <Text>{data && data.FareDetails && data.FareDetails.ChargeableFares.NetFare}</Text>
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

