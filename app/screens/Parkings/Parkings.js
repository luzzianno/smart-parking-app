import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebaseApp } from "../../utils/firebase";
import * as firebase from 'firebase';
import _ from "lodash";

const db = firebase.database(firebaseApp).ref("parking1");


export default function Parkings() {

    //const [totalParkings, setTotalParkings] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        const aux = [];
        db.once("value", function (snapshot) {
            //console.log(snapshot.val());
            _.mapKeys(snapshot.val(), function (ocupacion, key){
                aux.push(ocupacion)
            })
            setData(aux);
        });
    }, [])

    console.log({ data });

    const arreglo = [0, 1, 0, 1, 1];

    return (
        <View style={styles.view}>
            {data.map((ocupacion,key) =>  ocupacion ? <View style={styles.border} ><Text key={key}>Ocupado</Text></View> : <View style={styles.border} ><Text key={key}>desocupado</Text></View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    border: {
        borderTopColor: "#1C6EA4",
        borderBottomColor: "#1C6EA4",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    view: {
        marginTop: 10,
    }
})