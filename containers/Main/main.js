import React, { useEffect, useState, useRef, createRef } from 'react'
import { View, Text, AsyncStorage, Button } from 'react-native'
import Paytm from 'react-native-paytm';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Flights from './../flights/index'
import FlightsResult from './../flights.result/index'
import BookingSummary from './../booking.summary/index'
import Ticket from './../ticket/ticker'
import AirPlanes from './../flights/components/index'
import FareLaws from './../booking.summary/components/fare.law'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import { ListItem } from 'react-native-material-ui';
import Popover from 'react-native-popover-view';
import UserTicket from '../user.ticket/index';


export default function Main(props) {

    const Stack = createStackNavigator();
    const [token, setToken] = useState(false)
    useEffect(() => {
        AsyncStorage.getItem('AuthToken').then((token) => {
            if (token) {
                setToken(token)
            }
        });
    })

    const [showPopOver, setShowPopOver] = useState(false)

    const popover = useRef();

    const logout = () => {
        AsyncStorage.removeItem("AuthToken").then(() => {
            setShowPopOver(false)
            setToken(false)
        })
    }

    const showPopOverDialog = () => {
        setShowPopOver(true)

    }

    const navigateLogin = () => {
        setShowPopOver(false)
        props.navigation.navigate("Login")
    }

    const navigateTickets = () => {
        setShowPopOver(false)
        props.navigation.navigate("UserTicket")
    }

    console.log(token)
    return (
        <NavigationContainer initialRouteName="flight" independent={true}>
            <Popover
                isVisible={showPopOver}
                onCloseComplete={() => setShowPopOver(false)}
                onRequestClose={() => setShowPopOver(false)}
                fromView={popover.current}
            >
                <View style={{ padding: 10 }}>
                    {
                        !token ?
                            <React.Fragment>
                                <View style={{ width: 100, margin: 5, borderRadius: 100 }}><Button color="#E5634D" title="Login" onPress={() => navigateLogin()}>

                                </Button></View>

                            </React.Fragment>
                            :
                            <React.Fragment>
                                <View style={{ width: 100, margin: 5 }}>
                                    <Button color="#E5634D" title="My Ticket" onPress={() => 
                                    navigateTickets()
                                        
                                    }></Button></View>
                                <View style={{ width: 100, margin: 5, borderRadius: 100 }}><Button color="#E5634D" title="Logout" onPress={() => logout()}>

                                </Button></View>
                            </React.Fragment>
                    }
                </View>
            </Popover>
            <Stack.Navigator
                screenOptions={
                    {
                        headerTitleAlign: "center",
                        headerTintColor: "red",
                        headerTitleStyle: {
                            color: "#000000",
                        },


                        headerRight: (navigation) => (
                            <View>
                                <TouchableOpacity ref={popover} style={{ justifyContent: "center", alignItems: "center" }}
                                    onPress={() => showPopOverDialog()}

                                >

                                    <Icon
                                        name="dots-three-vertical"
                                        backgroundColor="#3b5998"
                                        style={{ fontSize: 20 }}
                                    > </Icon>
                                    <View style={{ position: "absolute", top: 100 }}>
                                        <ListItem
                                            divider
                                            centerElement={{
                                                primaryText: "Business Class"
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )
                    }
                }

            >

                <Stack.Screen
                    name="flight"
                    component={Flights}
                    options={{
                        headerTitle: "Search Flights",
                        headerTitleAlign: "center",

                    }}
                />

                <Stack.Screen
                    name="flightResult"
                    component={FlightsResult}
                    options={({ route }) => ({ title: route.params.name })}
                />

                <Stack.Screen
                    name="ticket"
                    component={Ticket}
                    options={{
                        headerTitle: "Ticket",
                        headerTitleAlign: "center",
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="BookingSummary"
                    component={BookingSummary}
                    options={{
                        headerTitle: "Review your booking",
                        headerTitleAlign: "center"
                    }}
                />
                <Stack.Screen
                    name="airplanes"
                    component={AirPlanes}
                    options={{
                        headerTitle: "Select Filght",
                        headerTitleAlign: "center"
                    }}
                />
                <Stack.Screen
                    name="FareLaws"
                    component={FareLaws}
                    options={{
                        headerTitle: "Fare Laws",
                        headerTitleAlign: "center"
                    }}
                />
               
            </Stack.Navigator>

        </NavigationContainer>

    )
}
