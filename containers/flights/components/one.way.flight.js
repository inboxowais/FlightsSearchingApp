import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-datepicker';
import RBSheet from "react-native-raw-bottom-sheet";
import { ListItem } from 'react-native-material-ui';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../common/button';
import { Snackbar } from 'react-native-material-ui';


export default function OneWayFlight(props) {

    const [state, setState] = useState({
        from: "",
        to: "",
        checkOutDate: "",
        checkInDate: "",
        AirLineCLass: "",
        adults: 1,
        children: 0,
        infants: 0,
        showSnackBar: false
    })

    const refRBSheet = useRef();

    const setClass = (data) => {
        setState({ ...state, AirLineCLass: data })
        refRBSheet.current.close()
    }

    const handleChange = (items) => {
        if (items == "addAdults") {
            setState({ ...state, adults: state.adults + 1 })
        }
        else if (items == "subractAdults") {
            if (state.adults != 0) {
                setState({ ...state, adults: state.adults - 1 })
            }
        }
        else if (items == "addChildren") {
            setState({ ...state, children: state.children + 1 })
        }
        else if (items == "subractChildren") {
            if (state.children != 0) {
                setState({ ...state, children: state.children - 1 })
            }
        }
        else if (items == "addInfants") {
            setState({ ...state, infants: state.infants + 1 })
        }
        else if (items == "subractInfants") {
            if (state.infants != 0) {
                setState({ ...state, infants: state.infants - 1 })
            }
        }
    }

    const onSearch = () => {


        if (props.source != "" && props.destination != "" && state.checkInDate != "" && state.checkOutDate != "" && state.checkInDate != "" && state.class != "") {
            const data = {
                source: props.source.AirportCode,
                destination: props.destination.AirportCode,
                departureDate: state.checkInDate,
                arrivalDate: state.checkOutDate,
                class: state.AirLineCLass,
                adults: state.adults,
                Children: state.children,
                infants: state.infants
            }
            props.navigation.navigate("flightResult", {
                data: data
            })
        }
        else {
            setState({ ...state, showSnackBar: true })
        }
    }

    const handleDateChange = (date, name) => {
        if (name == "checkInDate") {
            setState({ ...state, checkInDate: date })
        }
        if (name == "checkOutDate") {
            setState({ ...state, checkOutDate: date })
        }
    }

    return (
        <React.Fragment>
            <Snackbar
                visible={state.showSnackBar}
                message="Fill the required Fields"
                timeout={2000}
                onRequestClose={() => {
                    setState({ ...state, showSnackBar: false })
                }}
                style={
                    {
                        container: {
                            backgroundColor: "#E5634D",

                        }
                    }
                } />

            <View style={styles.container}>
                <View>
                    <View style={styles.selectFlight}>
                        <View style={styles.pickFlight}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("airplanes", {
                                        isRoundedTrip: "source"
                                    })
                                }}
                            >
                                <View style={styles.flight}>
                                    {
                                        props.source ?
                                            <React.Fragment>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>From</Text>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>{props.source.City}</Text>
                                            </React.Fragment> :
                                            <React.Fragment>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>Select</Text>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>Source</Text>
                                            </React.Fragment>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.icons}>
                            <Icon
                                name="plane"
                                backgroundColor="#3b5998"
                                style={{ fontSize: 20 }}
                            > </Icon>
                            <Icon
                                style={{
                                    transform: [{ rotate: '180deg' }],
                                    fontSize: 20
                                }}
                                name="plane"
                                backgroundColor="#3b5998"
                            ></Icon>
                        </View>
                        <View style={styles.dropFlight}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("airplanes", {
                                        isRoundedTrip: "destination"
                                    })
                                }}
                            >
                                <View style={styles.flight}>
                                    {
                                        props.destination ?
                                            <React.Fragment>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>To</Text>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>{props.destination.City}</Text>
                                            </React.Fragment> :
                                            <React.Fragment>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>Select</Text>
                                                <Text style={{ textAlign: "center", fontSize: 15 }}>Destination</Text>
                                            </React.Fragment>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.arrival}>
                        <View style={{ flex: 1 }}>
                            <DatePicker
                                showIcon={false}
                                style={{ width: undefined }}
                                date={state.checkInDate}
                                mode="date"
                                onDateChange={(date) => handleDateChange(date, "checkInDate")}
                                placeholder="select Departure Date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={
                                    {
                                        dateInput: {
                                            backgroundColor: "#f5f5f5",
                                            borderWidth: 1,
                                            borderColor: "#f5f5f5",
                                        },
                                        placeholderText: {
                                            alignSelf: "flex-start",
                                            paddingLeft: 10
                                        },
                                        dateText: {
                                            alignSelf: "flex-start",
                                            paddingLeft: 10,
                                            // color: "#B7B7B7"
                                        },
                                        datePickerCon: {
                                            display: "none"
                                        }

                                    }
                                }
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity
                            style={{ backgroundColor: "#f5f5f5", padding: 10 }}
                            onPress={() => refRBSheet.current.open()}
                        >
                            <Text>{
                                state.AirLineCLass.name ? state.AirLineCLass.name : "Select Class"
                            }</Text>
                        </TouchableOpacity>
                        <RBSheet
                            ref={refRBSheet}
                            closeOnDragDown={true}
                            closeOnPressMask={false}
                            customStyles={{
                                wrapper: {
                                    backgroundColor: "transparent"
                                },
                                draggableIcon: {
                                    backgroundColor: "#000"
                                }
                            }}
                        >
                            <View>
                                <ScrollView>
                                    <TouchableOpacity onPress={() => {
                                        setClass({ name: "Econommy Class", code: "E" })
                                    }}>
                                        <ListItem
                                            divider
                                            centerElement={{
                                                primaryText: "Economy Class"
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setClass({ name: "Bussiness Class", code: "B" })
                                    }}>
                                        <ListItem
                                            divider
                                            centerElement={{
                                                primaryText: "Business Class"
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setClass({ name: "Normal Class", code: "N" })
                                    }}>
                                        <ListItem
                                            divider
                                            centerElement={{
                                                primaryText: "Normal Class"
                                            }}
                                        />
                                    </TouchableOpacity>

                                </ScrollView>
                            </View>
                        </RBSheet>
                    </View>

                </View>
                <View>
                    <View style={styles.customers}>
                        <View style={{ ...styles.item }}>
                            <Text style={{ textAlign: "center" }}>Adults</Text>
                            <Text style={{ textAlign: "center" }}>Greater than 12 years</Text>
                            <TouchableOpacity
                                onPress={() => handleChange("addAdults")}
                                style={{ backgroundColor: "#E5634D", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}><Text style={{ color: "#ffffff" }}>+</Text></TouchableOpacity>
                            <Text>{state.adults}</Text>
                            <TouchableOpacity
                                onPress={() => handleChange("subractAdults")}
                                style={{ backgroundColor: "#E0E0E1", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}><Text style={{ color: "#ffffff" }}>-</Text></TouchableOpacity>

                        </View>
                        <View style={{ ...styles.item, marginLeft: 10 }}>
                            <Text style={{ textAlign: "center" }}>Children</Text>
                            <Text style={{ textAlign: "center" }}>2 to 12 years</Text>
                            <TouchableOpacity
                                onPress={() => handleChange("addChildren")}
                                style={{ backgroundColor: "#E5634D", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}><Text style={{ color: "#ffffff" }}>+</Text></TouchableOpacity>
                            <Text>{state.children}</Text>
                            <TouchableOpacity
                                onPress={() => handleChange("subractChildren")}
                                style={{ backgroundColor: "#E0E0E1", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}><Text style={{ color: "#ffffff" }}>-</Text></TouchableOpacity>

                        </View>
                        <View style={{ ...styles.item, marginLeft: 10 }}>
                            <Text style={{ textAlign: "center" }}>Infants</Text>
                            <Text style={{ textAlign: "center" }}>Less than 12 years</Text>
                            <TouchableOpacity
                                onPress={() => handleChange("addInfants")}
                                style={{ backgroundColor: "#E5634D", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}><Text style={{ color: "#ffffff" }}>+</Text></TouchableOpacity>
                            <Text>{state.infants}</Text>
                            <TouchableOpacity
                                onPress={() => handleChange("subractInfants")}
                                style={{ backgroundColor: "#E0E0E1", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}><Text style={{ color: "#ffffff" }}>-</Text></TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View>
                    <CustomButton
                        title="Search"
                        backgroundColor="#E5634D"
                        onPress={() => onSearch()}></CustomButton>
                </View>
            </View>

        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        padding: 20,
        justifyContent: "space-around"

    },
    dateLabel: {
        backgroundColor: "#f5f5f5",
        paddingLeft: 3
    },
    button: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "green",
        borderRadius: 100,
        flex: 1,
        borderWidth: 1,
        borderColor: '#E5634D',
    },
    topButton: {
        flexDirection: "row",
    },
    flight: {
        justifyContent: "center"
    },
    selectFlight: {
        flexDirection: "row",
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
    arrival: {
        flexDirection: "row",
    },
    customers: {
        flexDirection: "row",
    },
    item: {
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#f5f5f5",
        height: 160,
        borderRadius: 10,
        padding: 10
    }

})


