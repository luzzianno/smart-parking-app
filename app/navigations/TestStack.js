import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Toast from 'react-native-easy-toast'

export default function TestStack () {

    return (
        <View style={styles.viewStyle}>
            <Button title={'Press me'} onPress={()=>{
                this.toast.show('hello world!',2000);
            }}/>
            <Toast ref={(toast) => this.toast = toast}/>
        </View>
    );

};

const styles = StyleSheet.create({
    viewStyle :{
        marginTop : 50,
    },
});