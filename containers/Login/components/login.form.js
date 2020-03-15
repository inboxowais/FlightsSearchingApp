import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from './../../common/button';
import CustomTextBox from './../../common/textbox';
import { Snackbar } from 'react-native-material-ui';
import 'whatwg-fetch';
import { AsyncStorage } from 'react-native'

export default function LoginForm(props) {

    const { auth } = props;
    const [state, setState] = useState({
        email: "8861056670",
        password: "Atmega328",
        emailIsInValid: false,
        passwordIsInValid: false,
        showSnackBar: false,
        isLoggedIn: false,
        token: false,
        loginClicked: false
    })


    useEffect(() => {
        AsyncStorage.getItem('AuthToken').then((token) => {
            if (token) {
                console.log(token)
                setState({ ...state, token: token })
            }
        });
    }, [])

    useEffect(() => {
        if (state.loginClicked) {
            if (props && props.auth && props.auth.AuthToken) {
                props.navigation.navigate("MainScreen")
            }
        }
    }, [props.auth])

    const handleChange = (value, name) => {
        setState({ ...state, [name]: value })
    }

    const login = () => {
        if (state.email == "" || state.password == "") {
            setState({ ...state, showSnackBar: true })
        }
        else {
            props.login({
                data: {
                    "username": state.email,
                    "password": state.password,
                    "grant_type": "login"
                },
                token: state.token
            })
            setState({ ...state, loginPressed: !state.loginPressed, loginClicked: true })
        }

    }




    return (
        <React.Fragment>
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
                <View style={styles.buttonContainer}>
                    <CustomTextBox
                        //    onChange = {(event) => {
                        //        alert(event.target)
                        //    }}
                        onChangeText={(value) => handleChange(value, "email")}
                        placeholder="Email Or Phone Number"
                        value={state.email}
                    />
                    <CustomTextBox
                        onChangeText={(value) => handleChange(value, "password")}
                        placeholder="Password"
                        secure={true}
                        value={state.password}
                    />
                    <CustomButton
                        title="Sign In"
                        backgroundColor="#E5634D"
                        onPress={() => login()}
                        showLoading={props.authLoading} />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{ color: "#000000", textAlign: "center" }}>Forgot Your Password</Text>
                    </TouchableOpacity>
                </View>
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