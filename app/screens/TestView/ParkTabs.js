import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { firebaseApp } from "../../utils/firebase";
import * as firebase from 'firebase';
import _ from "lodash";
import Park1 from "./Park1";
import Park2 from "./Park2";
import Loading from "../../components/Loading";

const Tab = createMaterialTopTabNavigator();
const db1 = firebase.database(firebaseApp).ref("parking1");
const db2 = firebase.database(firebaseApp).ref("parking2");

export default function ParkTabs(){

    const [dataOccup1, setDataOccup1] = useState([]);
    const [numSlot1, setNumSlot1] = useState(0);
    const [emptyPark1, setEmptyPark1] = useState(0);

    const [dataOccup2, setDataOccup2] = useState([]);
    const [numSlot2, setNumSlot2] = useState(0);
    const [emptyPark2, setEmptyPark2] = useState(0);

    useEffect(() => {
        
        db1.on("value", function (snapshot) {
            const aux = [];
            let occurr = 0;
            //console.log(snapshot.val());
            _.mapKeys(snapshot.val(), function (ocupation, key) {
                aux.push(ocupation)
            })
            setDataOccup1(aux);
            setNumSlot1(aux.length);
            for(var i = 0; i < aux.length; ++i){
                if(aux[i] == 0)
                    occurr++;
            }
            setEmptyPark1(occurr);
        }); 
    }, []);

    useEffect(() => {
        
        db2.on("value", function (snapshot) {
            const aux2 = [];
            let occurr2 = 0;
            //console.log(snapshot.val());
            _.mapKeys(snapshot.val(), function (ocupation2, key) {
                aux2.push(ocupation2)
            })
            setDataOccup2(aux2);
            setNumSlot2(aux2.length);
            for(var i = 0; i < aux2.length; ++i){
                if(aux2[i] == 0)
                    occurr2++;
            }
            setEmptyPark2(occurr2);
        }); 
    }, []);

    return(
        <Tab.Navigator
            initialRouteName="Estacionamiento 1"
            tabBarOptions={{
                activeTintColor: '#1A6EF8',
                inactiveTintColor: '#7E7E7E',
                labelStyle: { fontSize: 12 , fontWeight: 'bold'},
                }}
        >
            <Tab.Screen
                name = {"park1"}
                component = {() => numSlot1 ? <Park1 data = {{dataOccup1}}/> : <Loading isVisible={true} text="Cargando..." />}
                options = {{
                    tabBarLabel: "Estacionamiento 1\n Disponibles: ".concat(emptyPark1),
                }}
            />
            <Tab.Screen
                name="park2"
                component = {() => <Park2 data = {{dataOccup2}}/>}
                options = {{
                    tabBarLabel: "Estacionamiento 2\n Disponibles: ".concat(emptyPark2),
                }}
            />
        </Tab.Navigator>
    );
}