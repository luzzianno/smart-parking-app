import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Parkings from "../screens/Parkings/Parkings";
import Parking_1 from "../screens/Parkings/Parking_1";

const Stack = createStackNavigator();

export default function ParkingsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "parkings"
                component = {Parkings}
                options = {{ title: "Estacionamientos" }}
            />
            <Stack.Screen
                name = "parking_1"
                component = {Parking_1}
                options = {{ title: "Estacionamiento 1" }}
            />
        </Stack.Navigator>
    );
}