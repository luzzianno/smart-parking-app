import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements'
import  ParkingsStack from "./ParkingStack"
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="parkings"
                tabBarOptions={{
                inactiveTintColor: "#646464",
                activeTintColor: "#1A6EF8"
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color),
                })}
            >    
                <Tab.Screen
                    name = "parkings"
                    component = {ParkingsStack}
                    options = {{ title: "Estacionamientos" }}
                />
                <Tab.Screen
                    name = "account"
                    component = {AccountStack}
                    options = {{ title: "Cuenta" }}
                />
            </Tab.Navigator>  
        </NavigationContainer>
    );
}

function screenOptions(route, color){
    let iconName;
    
    switch (route.name) {
        case "parkings":
            iconName = "car-info"
            break;
        case "account":
            iconName = "account"
            break;
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    );
}