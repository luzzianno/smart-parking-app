import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ParkTabs from "../screens/TestView/ParkTabs";

const Stack = createStackNavigator();

export default function TestStack () {

    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "parktabs"
                component = {ParkTabs}
                options = {{ title: "Estacionamientos" }}
            />
        </Stack.Navigator>
    );

};

const styles = StyleSheet.create({
    viewStyle :{
        marginTop : 50,
    },
});