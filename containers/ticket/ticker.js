import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../common/button';

export default function Ticket(props) {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <View style={{ padding: 20, borderRadius: 100, borderColor: "#E5634D", borderWidth: 1 }}>
                    <Text style={{ color: "#E5634D" }}>Economic Class</Text>
                </View>
            </View>

            <View style={styles.selectFlight}>
                <View style={styles.pickFlight}>
                    <TouchableOpacity>
                        <View style={styles.flight}>
                            <Text style={{ textAlign: "center", color: "#9B9B9B" }}>From</Text>
                            <Text style={{ textAlign: "center", fontSize: 30 }}>SIN</Text>
                            <Text style={{ textAlign: "center" }}>Singapore</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.icons}>
                    <Icon
                        name="plane"
                        backgroundColor="#3b5998"
                        style={{ fontSize: 20 }}
                    > </Icon>
                    <Icon
                        style={{
                            transform: [{ rotate: '180deg' }],
                            fontSize: 20

                        }}
                        name="plane"
                        backgroundColor="#3b5998"
                    ></Icon>
                </View>
                <View style={styles.dropFlight}>
                    <TouchableOpacity>
                        <View style={styles.flight}>
                            <Text style={{ textAlign: "center", color: "#9B9B9B" }}>TO</Text>
                            <Text style={{ textAlign: "center", fontSize: 30 }}>SYD</Text>
                            <Text style={{ textAlign: "center" }}>Sydney</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ticket}>
                <View style = {{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                    <View>
                        <Text style = {{color:"#B9B9B9"}}>Passenger</Text>
                        <Text>Steve Garrett</Text>
                    </View>
                    <View>
                        <Text style = {{color:"#B9B9B9"}}>Date</Text>
                        <Text>Thu , 15 Aug 09</Text>
                    </View>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                    <View>
                        <Text style = {{color:"#B9B9B9"}}>Passenger</Text>
                        <Text>Steve Garrett</Text>
                    </View>
                    <View>
                        <Text style = {{color:"#B9B9B9"}}>Date</Text>
                        <Text>Thu , 15 Aug 09</Text>
                    </View>
                </View>
                <View style = {{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                    <View>
                        <Text style = {{color:"#B9B9B9"}}>Passenger</Text>
                        <Text>Steve Garrett</Text>
                    </View>
                    <View>
                        <Text style = {{color:"#B9B9B9"}}>Date</Text>
                        <Text>Thu , 15 Aug 09</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style = {{backgroundColor:"#000000",height:100,justifyContent:"center",alignItems:"center"}}>
                    <Text style = {{color:"white",fontSize:25,fontWeight:"bold"}}>CLMVBG</Text>
                </View>
                <Text style = {{textAlign:"center",color:"#a5a5a5"}}>0944 0923 1238 9801</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        padding: 20,
        justifyContent:"space-around"
    },
    flight: {
        justifyContent: "center"
    },
    selectFlight: {
        flexDirection: "row",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        paddingBottom: 15
    },
    pickFlight: {
        flex: 1
    },
    icons: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    dropFlight: {
        flex: 1
    },
    ticket: {
        marginVertical: 10,
        borderTopColor: "#f5f5f5",
        borderBottomColor: "#f5f5f5",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        paddingHorizontal:10
    }
})
