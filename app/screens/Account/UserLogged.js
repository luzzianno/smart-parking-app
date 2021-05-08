import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Button } from "react-native-elements";
import * as firebase from "firebase";

export default function UserLogged(){
    return(
        <View>
            <Text>UserLogged...</Text>

            <View style={styles.viewBtn}>
                <Button
                    title="Cerrar Sesion"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => firebase.auth().signOut()}
                />
            </View>        
        </View>
    );
}

const styles = StyleSheet.create({
    viewBtn: {
        flex: 1,
        alignItems: "center",
        margin: 10,
    },
    btnStyle: {
        backgroundColor:"#1A6EF8",
    },
    btnContainer: {
        height: "100%",
        width: "70%",
    },
})