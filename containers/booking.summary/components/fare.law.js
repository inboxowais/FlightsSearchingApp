import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import HTML from 'react-native-render-html';

export default function FareLaw(props) {
    const htmlString = props.route.params.fareLaws
    return (
        <ScrollView>
            <HTML html={htmlString} />
        </ScrollView>
    )
}
