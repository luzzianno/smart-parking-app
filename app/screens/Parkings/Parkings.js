import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { firebaseApp } from "../../utils/firebase";
import * as firebase from 'firebase';
import _ from "lodash";

const db = firebase.database(firebaseApp).ref("parking1");


export default function Parkings() {

    const [dataOccup, setDataOccup] = useState([]);
    const [numSlot, setNumSlot] = useState(0);

    const getDataOccup = () => {
        const aux = [];
        db.once("value", function (snapshot) {
            //console.log(snapshot.val());
            _.mapKeys(snapshot.val(), function (ocupation, key) {
                aux.push(ocupation)
            })
            setDataOccup(aux);
            setNumSlot(aux.length);
        });
    };

    useEffect(() => {
        this.setInterval( () => { 
            getDataOccup();
         }, 2000);
    }, []);
    /* console.log({dataOccup});
    console.log(numSlot); */
    return (
        <ScrollView>
            <View>
                <Text style={styles.crosswalk}> Paso de cebra </Text>
            </View>
            <View style={styles.viewCarList}>
                {dataOccup.map((ocupation, key) => ocupation ?
                    <View style={styles.border} >
                        <Image
                            key={key}
                            resizerMode="cover"
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
                <Text style={styles.entry}> Entrada </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    crosswalk: {
        textAlign: "center",
        fontWeight: "bold",
    },
    border: {
        borderTopColor: "#B7BABE",
        borderBottomColor: "#B7BABE",
        borderLeftColor: "#B7BABE",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderLeftWidth: 6,
        marginRight: "50%",
        width: 160,
        height: 120,
    },
    occupationText: {
        fontWeight: "bold",
        color:"#10B82F",
        textAlign: "center",
        marginTop: 50,
        fontSize: 20,
    },
    viewCarList: {
        margin: 10,
        alignContent: "center",
    },
    entry: {
        position: "absolute",
        bottom: 5,
        right: 20,
        fontWeight: "bold",
    },
    carImage:{
        width: 140,
        height: 80,
        position: "absolute",
        marginTop: 17,
        marginLeft: 5,
    },
})