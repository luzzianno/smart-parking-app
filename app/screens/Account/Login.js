import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    return (
        <ScrollView>
            <View style={styles.viewContainer} >
                <CreateAccount/>
            </View>
            <Divider style={styles.divider} />
            <Text>Social Login</Text>
        </ScrollView>
    );
}

function CreateAccount(){
    const navigation = useNavigation();
    return(
        <Text style={styles.textRegister} >
            ¿Aun no tienes una cuenta?{" "}
            <Text 
                style={styles.btnRegister}
                onPress={() => navigation.navigate("register")}
            >
                Registrate
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        marginLeft: 40,
        marginRight: 40,
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister: {
        color: "#1A6EF8",
        fontWeight: "bold",
    },
    divider:{
        backgroundColor: "#1A6EF8",
        margin: 40,
    },
});