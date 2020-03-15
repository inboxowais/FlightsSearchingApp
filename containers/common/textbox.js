import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

export default function CustomTextBox(props) {
    const {placeholder,secure,value} = props
    return (
        <TextInput
            style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={props.onChangeText}
            value = {value}
            style={styles.textBox}
            placeholder={placeholder}
            secureTextEntry = {secure}
        />
    )
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: "#f5f5f5",
        marginBottom: 10,
        borderRadius: 10,
        padding: 5
    }
});