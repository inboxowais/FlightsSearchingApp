import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, ActivityIndicator } from 'react-native'

export default function CustomButton(props) {
    const {title,backgroundColor,color,borderColor,showLoading} = props
    return (
        <TouchableOpacity onPress={props.onPress}
            style={{ ...styles.button, backgroundColor: backgroundColor ? backgroundColor : "#3B5998",borderRadius:100,borderColor:borderColor ? borderColor : "transparent",flexDirection:"row",justifyContent:"center" }}>
            {
              showLoading ? <ActivityIndicator color = "#000000" /> : null
            }
            <Text style={{...styles.buttonText,color : color ? color : "#ffffff"}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "green",
        marginBottom: 20,
        borderRadius: 14,
        borderWidth:1
    },
    buttonText : {

        fontSize:14
    }
});