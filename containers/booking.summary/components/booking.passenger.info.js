import React from 'react'
import { View, Text, StyleSheet,Picker } from 'react-native'
import CustomInput from './../../common/textbox'
import DatePicker from 'react-native-datepicker'

export default function BookingPassengerInfo(props) {
    return (
        <View style={styles.contactDetail}>
            <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>ENTER PASSENGER INFO</Text>
            <Picker
                selectedValue={props.passengerInfo.salute}
                style={{ height: 50, width: 100 }}
                onValueChange = {(value) => props.onPassengerInFoChange(value,"salute")}
                >
                <Picker.Item label="Mr" value="Mr" />
                <Picker.Item label="Mrs" value="Mrs" />
            </Picker>
            <CustomInput
                placeholder="First Name and middle name"
                onChangeText = {(value) => props.onPassengerInFoChange(value,"FirstAndLastName")}
            />
            <CustomInput
                placeholder="Last Name"
                onChangeText = {(value) => props.onPassengerInFoChange(value,"lastName")}
            />
           
            <DatePicker
                showIcon={false}
                style={{ width: undefined }}
                 date={props.passengerInfo.dateOfBirth}
                mode="date"
                 onDateChange={(value) => props.onPassengerInFoChange(value,"dateOfBirth")}
                placeholder="select Date Of Birth"
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
