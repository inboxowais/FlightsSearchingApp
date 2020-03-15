import React, { useEffect } from 'react'
import { View, Button, Text, ActivityIndicator } from 'react-native'

export default function TestRedux(props) {
    const onClick = () => {
        props.testAction()
        props.getUsers()
    }
    
    return (
        <View>
            <Button onPress={() => onClick()} title="test redux"></Button>
            {
                props.usersLoading ?
                    <React.Fragment>
                        <ActivityIndicator />
                    </React.Fragment> :
                    <React.Fragment>
                        {
                            props.users && props.users.data && props.users.data.map((data, index) => {
                                return <Text key={index}>{data.email}</Text>
                            })
                        }
                    </React.Fragment>
            }

        </View>
    )
}
