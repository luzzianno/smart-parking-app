import React, {useRef} from "react";
import { StyleSheet, View, Image } from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register(){
    const toastRef = useRef();

    return(<>
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../assets/img/icono_app.png")}
                resizeMode="contain"
                style={styles.image}
            />
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
    image: {
        height: 120,
        width: "100%",
        marginTop: 40,
    },
    toastStyle: {
        marginTop: 100,
         
    }
});