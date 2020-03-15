import React, { useEffect, useState } from 'react'
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native'
import Tickets from './components/tickets'
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from './../common/button'
import UserUpComingTickets from './user.upcoming.tickets/user.upcoming.tickets'
import UserCancelledTickets from './user.cancelled.tickets/user.cancelled.tickets'
import UserCompletedTickets from './user.completed.tickets/user.completed.tickets'

export default function UserTicket(props) {

    const [buttons, setButtons] = useState({
        upcoming: true,
        cancelled: false,
        completed: false
    })

    const handleUpComingClick = () => {
        setButtons({ ...buttons, cancelled: false, completed: false, upcoming: true })
    }

    const handleCancelClick = () => {
        setButtons({ ...buttons, cancelled: true, completed: false, upcoming: false })
    }

    const handleCompletedClick = () => {
        setButtons({ ...buttons, cancelled: false, completed: true, upcoming: false })
    }

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "center",paddingTop:5 }}>
                    <View style = {{margin:2}}><CustomButton
                        title="Upcoming"
                        onPress={() => handleUpComingClick()}
                        backgroundColor={buttons.upcoming ? "#E5634D" : "transparent"}
                        borderColor={!buttons.upcoming ? "#E5634D" : "#ffffff"}
                        color = {!buttons.upcoming ? "#E5634D" : "#ffffff"}
                    /></View>
                    <View style = {{margin:2}}><CustomButton title="Cancelled"
                        onPress={() => handleCancelClick()}
                        backgroundColor={buttons.cancelled ? "#E5634D" : "transparent"}
                        borderColor={!buttons.cancelled ? "#E5634D" : "#ffffff"}
                        color = {!buttons.cancelled ? "#E5634D" : "#ffffff"}
                    /></View>
                    <View style = {{margin:2}}><CustomButton title="Completed"
                        onPress={() => handleCompletedClick()}
                        backgroundColor={buttons.completed ? "#E5634D" : "transparent"}
                        borderColor={!buttons.completed ? "#E5634D" : "#ffffff"}
                        color = {!buttons.completed ? "#E5634D" : "#ffffff"}
                    /></View>
                </View>


                {
                    buttons.upcoming ? <UserUpComingTickets {...props} /> : null
                }
                {
                    buttons.completed ? <UserCompletedTickets {...props} /> : null
                }
                {
                    buttons.cancelled ? <UserCancelledTickets {...props} /> : null
                }
            </View>
        </ScrollView>
    )
}
