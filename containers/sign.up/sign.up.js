import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, Text, Dimensions, Button, ActivityIndicator } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CustomButton from './../common/button';
import CustomTextBox from './../common/textbox';
import { Snackbar } from 'react-native-material-ui';
import 'whatwg-fetch';
import Popover from 'react-native-popover-view';

export default function SignUp(props) {

    const screenWidth = Math.round(Dimensions.get('window').width);

    const [state, setState] = useState({
        firstName: "Sunil",
        lastName: "Kumar",
        mobileNumber: "8861056670",
        emailAddress: "sonuame@aol.com",
        password: "test123",
        confirmPassword: "test123",
        otp: "",
        showOtpPopUp: false,
        otpVerfied: "OTP VERIFIED",
        signUpButtonClicked: false,
        registerToggle: false
    })

    useEffect(() => {

        if (props.registerUser.size != 0) {
            if (props.registerUser == "Account already exists") {
                alert("Account Already Exist")
            }
            else if (props.registerUser == "Account can't be created") {
                alert("Account can't be created")
            }
            else {
                props.getIndent(props.registerUser.PhoneNo)
                setState({ ...state, showOtpPopUp: true })
            }
        }
    }, [props.registerUser, state.registerToggle])


    useEffect(() => {

        if (props.Otp.size != 0) {
            if (props.Otp && props.Otp.verified) {
                const registerAsMobile = {
                    "username": props.registerUser.PhoneNo,
                    "password": state.password,
                    "confirmPassword": state.confirmPassword,
                    "grant_type": "register",
                    "userid": props.registerUser.UserId
                }

                props.createLogin(registerAsMobile)

                const registerAsEmail = {
                    "username": props.registerUser.Email,
                    "password": state.password,
                    "confirmPassword": state.confirmPassword,
                    "grant_type": "register",
                    "userid": props.registerUser.UserId
                }
                props.createLogin(registerAsEmail)
                setState({ ...state, showOtpPopUp: false })
                props.navigation.navigate("loginForm")
            }
            else if (props.Otp && !props.Otp.verified) {
                alert("Please Enter Correct Otp")

            }
        }
    }, [props.Otp])


    const handleChange = (value, name) => {
        setState({ ...state, [name]: value })

    }

    const SignUp = () => {
        const data = {
            "Email": state.emailAddress,
            "PhoneNo": state.mobileNumber,
            "Password": state.password,
            "ConfirmPassword": state.confirmPassword,
            "RegType": "normal",
            "UserType": 1,
            "FirstName": state.firstName,
            "LastName": state.lastName,
            "createLogin": false,
        }

        props.register(data)
        setState({ ...state, signUpButtonClicked: true, registerToggle: !state.registerToggle })

    }





    const verifyOtp = () => {
        props.verifyOtp(
            {
                indent: props.indent.ident,
                otp: state.otp
            }
        )

    }






    return (
        <React.Fragment>
            <Popover
                isVisible={state.showOtpPopUp}
                onCloseComplete={() => setState({ ...state, showOtpPopUp: false })}
                onRequestClose={() => setState({ ...state, showOtpPopUp: false })}
            >
                <View style={{ width: screenWidth - 20, padding: 10 }}>

                    <CustomTextBox
                        onChangeText={(value) => handleChange(value, "otp")}
                        placeholder="First Name"
                        value={state.otp}
                        placeholder="Enter Otp"
                    />
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>

                        {props.verifyOtpLoading ? <ActivityIndicator /> : null}
                        <Button title="Verify Otp" style={{ backgroundColor: "#E5634D", padding: 10, borderRadius: 100, width: screenWidth }} onPress={() => verifyOtp()}></Button>

                    </View>

                </View>
            </Popover>
            <Snackbar
                message="Fill the required Fields"
                visible={state.showSnackBar}
                onRequestClose={() => {
                    setState({ ...state, showSnackBar: false })
                }}
                style={
                    {
                        container: {
                            backgroundColor: "#E5634D",
                        }
                    }
                }
                timeout={2000}
            />




            <View style={styles.container}>
                <ScrollView style={{ paddingTop: 30, flex: 1 }}>
                    <View style={styles.buttonContainer}>
                        <CustomTextBox
                            onChangeText={(value) => handleChange(value, "firstName")}
                            placeholder="First Name"
                            value={state.firstName}
                        />
                        <CustomTextBox
                            onChangeText={(value) => handleChange(value, "lastName")}
                            placeholder="Last Name"

                            value={state.lastName}
                        />
                        <CustomTextBox
                            onChangeText={(value) => handleChange(value, "mobileNumber")}
                            placeholder="Mobile Number"

                            value={state.mobileNumber}
                        />
                        <CustomTextBox
                            onChangeText={(value) => handleChange(value, "emailAddress")}
                            placeholder="Email Address"

                            value={state.emailAddress}
                        />
                        <CustomTextBox
                            onChangeText={(value) => handleChange(value, "password")}
                            placeholder="Your Password"
                            secure={true}
                            value={state.password}
                        />
                        <CustomTextBox
                            onChangeText={(value) => handleChange(value, "confirmPassword")}
                            placeholder="Confirm Password"
                            secure={true}
                            value={state.confirmPassword}
                        />
                        <CustomButton
                            title="Sign Up"
                            backgroundColor="#E5634D"
                            onPress={() => SignUp()}
                            showLoading={props.registerUserLoading || props.indentLoading} />

                    </View>
                </ScrollView>
            </View>

            <View>

            </View>

        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        justifyContent: "center"
    },
    title: {
        color: '#fff',
        width: 140,
        marginTop: 10,
        textAlign: "center",
        opacity: 0.9
    },
    text: {
        fontSize: 15
    },
    buttonContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10
    },
    button: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "green",
        marginBottom: 20,
        borderRadius: 14
    },
    textBox: {
        backgroundColor: "#f5f5f5",
        marginBottom: 10,
        borderRadius: 10,
        padding: 20
    }
});