import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Parkings from "../screens/Parkings/Parkings";

const Stack = createStackNavigator();

export default function ParkingsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "parkings"
                component = {Parkings}
                options = {{ title: "Estacionamientos" }}
            />
        </Stack.Navigator>
    );
}