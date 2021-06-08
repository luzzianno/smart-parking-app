import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import _ from "lodash";

export default function Park1(props) {

    return (
            <ScrollView>
                <View style={styles.containCrosswalk}>
                    <Image
                        resizerMode="cover"
                        PlaceHolderContent={<ActivityIndicator color="fff"/>}
                        source={require("../../../assets/img/crosswalk.png")}
                        style={styles.crosswalk}
                    />
                </View>
                <View style={styles.viewCarList}>
                    <View style={styles.border2}></View>
                    {props.data.dataOccup1.map((ocupation, key) => ocupation ?
                        <View style={styles.border} >
                            <Image
                                key={key}
                                resizerMode="contain"
                                PlaceHolderContent={<ActivityIndicator color="fff"/>}
                                source={require("../../../assets/img/car.png")}
                                style={styles.carImage}
                            />
                        </View>
                        :
                        <View
                            style={styles.border}
                        >
                            <Text
                                style={styles.occupationText}
                                key={key}
                            >
                                DISPONIBLE
                            </Text>
                        </View>
                    )}
                    <View style={styles.border2}></View>
                    <Image
                        resizerMode="stretch"
                        PlaceHolderContent={<ActivityIndicator color="fff"/>}
                        source={require("../../../assets/img/entry_exit.png")}
                        style={styles.imageEntryExit}
                    />
                </View>
            </ScrollView>

    );
}

const styles = StyleSheet.create({
    containCrosswalk: {
        height: 40,
        marginTop: 10,
        marginBottom: 4,
        marginLeft: 10,
        marginRight: 10,
    },
    crosswalk: {
        flex: 1,
        width: null,
        height: null,
    },
    border: {
        borderTopColor: "#B7BABE",
        borderBottomColor: "#B7BABE",
        borderLeftColor: "#B7BABE",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderLeftWidth: 6,
        marginRight: "50%",
        width: 100,
        height: 50,
    },
    border2: {
        borderTopColor: "#B7BABE",
        borderTopWidth: 3,
        width: 100,
    },
    occupationText: {
        fontWeight: "bold",
        color:"#10B82F",
        textAlign: "center",
        marginTop: "20%",
        flex: 1,
        fontSize: 15,
    },
    viewCarList: {
        margin: 10,
        alignContent: "center",
    },
    carImage:{
        flex: 1,
        width: null,
        height: null,
    },
    imageEntryExit: {
        position: "absolute",
        width: 100,
        height: 80,
        bottom: 1,
        right: 30,
        flex: 1,
    },
})