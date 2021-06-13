import React from "react";
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGest(){
    const navigation = useNavigation();

    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                source={require("../../../assets/img/icono_app.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title} > Smart Parking UACh </Text>
            <Text style={styles.description} >
                Esta es una aplicacion en estado de pruebas
                que te permitira visualizar las plazas disponibles en hasta
                ahora, dos estacionamientos del campus miraflores.
            </Text>
            <Button
                title="Ver tu perfil"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 150,
        width: "100%",
        marginBottom: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        marginBottom: 20,
    },
    viewBtn: {
        flex: 1,
        alignItems: "center",
    },
    btnStyle: {
        backgroundColor:"#1A6EF8",
    },
    btnContainer: {
        width: "95%",
    },
});