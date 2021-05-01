import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validation";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm(props){
    const{ toastRef } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue);
    const navigation = useNavigation();

    const onSubmit = () => {
        if (
            isEmpty(formData.email) ||
            isEmpty(formData.password)|| 
            isEmpty(formData.repeatPassword)
        ) {
            toastRef.current.show("Todos los campos son obligatorios");
        } else if (!validateEmail(formData.email)){
            toastRef.current.show("El email no es correcto");
        } else if(size(formData.password < 6)){
            toastRef.current.show("La contraseña debe tener al menos 6 caracteres");
        } else if(formData.password !== formData.repeatPassword){
            toastRef.current.show("No coinciden las contraseñas");
        } else {
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
                navigation.navigate("account");
            })
            .catch(()=>{
                toastRef.current.show("El email ya esta en uso");
            })
        }
    };

    const onChange = (e, type) => {
        setFormData({ ...formData,[type]: e.nativeEvent.text })
    };

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo Electronico"
                containerStyle={styles.formContainer}
                onChange={e => onChange(e,"email")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={e => onChange(e,"password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Repetir Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={e => onChange(e,"repeatPassword")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                    />
                }
            />
            <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    );
}

function defaultFormValue(){
    return {
        email: "",
        password: "",
        repeatPassword: "",
    }
}

const styles = StyleSheet.create({
    formContainer:{
        //flex: 1,
        //alignItems: "center",
        //justifyContent: "center",
        marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    btnContainerRegister:{
        marginTop: 20,
        width: "95%",
    },
    btnRegister:{
        backgroundColor: "#1A6EF8",
    },
    iconRight:{
        color: "#c1c1c1"
    },
});