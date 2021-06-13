import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/Account/LoginForm";

export default function Login(){
    return (
        <ScrollView>
            <View style={styles.viewContainer} >
                <Image
                    source={require("../../../assets/img/icono_app.png")}
                    resizeMode="contain"
                    style={styles.image}
                />
                <LoginForm/>
                <CreateAccount/>
            </View>
           {/*  <Divider style={styles.divider} /> */}
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
        marginTop: 40
    },
    image: {
        height: 120,
        width: "100%",
        //marginBottom: 10,
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