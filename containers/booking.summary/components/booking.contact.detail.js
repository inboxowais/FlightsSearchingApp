import React, { useState } from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import CustomInput from './../../common/textbox'

export default function BookingContactDetail(props) {


    return (
        <View style={styles.contactDetail}>
            <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>ENTER CONTACT DETAILS</Text>
           
            <CustomInput
                placeholder="First Name"
                onChangeText={(value) => props.onContactDetailChange(value, "firstName")}
                value = {props.contactDetail.firstName}
            />
            <CustomInput
                placeholder="Last Name"
                value = {props.contactDetail.lastName}
                onChangeText={(value) => props.onContactDetailChange(value, "lastName")}
            />
            <CustomInput
                placeholder="Mobile Number"
                value = {props.contactDetail.mobileNumber}
                onChangeText={(value) => props.onContactDetailChange(value, "mobileNumber")}
            />
            <CustomInput
                placeholder="Email"
                value = {props.contactDetail.Email}
                onChangeText={(value) => props.onContactDetailChange(value, "Email")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contactDetail: {
        borderWidth: 1,
        borderColor: "#000000",
        padding: 10,
        borderRadius: 20
    }
})
