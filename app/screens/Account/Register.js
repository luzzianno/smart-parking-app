import React, {useRef} from "react";
import { StyleSheet, View, Text } from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register(){
    const toastRef = useRef();

    return(<>
        <KeyboardAwareScrollView>
            <View style={styles.viewForm} >  
                <RegisterForm toastRef={toastRef}/>
            </View>  
        </KeyboardAwareScrollView>
        <Toast ref={toastRef} position='top' positionValue={200} opacity= {1} style = {styles.toastStyle}/>
        </>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        marginLeft: 40,
        marginRight: 40,
    },
    toastStyle: {
        marginTop: 100,
         
    }
});