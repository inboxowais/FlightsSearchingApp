import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from './../../common/textbox'
import DatePicker from 'react-native-datepicker'
import CustomButton from '../../common/button'

export default function BookingWallet(props) {
    return (
        <View style={styles.contactDetail}>
            <CustomInput
                placeholder="Enter Coupon Amount "
            />
            <CustomButton backgroundColor ="#E5634D" title = "Add"/>
            
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
