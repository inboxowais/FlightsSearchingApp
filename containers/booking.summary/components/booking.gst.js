import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from './../../common/textbox'

export default function BookingPassengerInfo(props) {
    return (
        <View style={styles.contactDetail}>
            <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>ADD GST</Text>
            <CustomInput
                placeholder="Company Name"
                onChangeText = {(value) => props.onGstChange(value,"companyName")}
            />
            <CustomInput
                placeholder="GST NUMBER"
                onChangeText = {(value) => props.onGstChange(value,"gstNumber")}
            />
            <CustomInput
                placeholder="Company Address"
                onChangeText = {(value) => props.onGstChange(value,"companyAddress")}
            
            />
            <CustomInput
                placeholder="Company Email"
                onChangeText = {(value) => props.onGstChange(value,"companyEmail")}
            />
            <CustomInput
                placeholder="Contact"
                onChangeText = {(value) => props.onGstChange(value,"contact")}
            />
            <CustomInput
                placeholder="First and middle Name"
                onChangeText = {(value) => props.onGstChange(value,"FirstAndMiddleName")}
                
            />
            <CustomInput
                placeholder="Last Name"
                onChangeText = {(value) => props.onGstChange(value,"lastName")}
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
