import { StyleSheet, View, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import IconButton from "../components/ui/buttons/IconButton";
import UserInputField from "../components/ui/UserInputField";
import Title from "../components/ui/Title";

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function AuthScreen({ onValid }) {
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");
  const [visibleButton, setVisibleButton] = useState(true);
  function resetCredentials() {
    setEmailEntered("");
    setPasswordEntered("");
  }

  function onValidAuth() {
    if (validateEmail(emailEntered)) {
      {
        if (emailEntered === "jhon@mail.com" && passwordEntered === "77@1$") {
          console.log("Valid email and password");
        } else {
          Alert.alert(
            "Credenciales inválidas",
            "El correo o la contraseña está incorrecto, favor de intentarlo de nuevo",
            [{ text: "Aceptar", onPress: resetCredentials }]
          );
        }

        onValid();
      }
    } else {
      console.log("Invalid Email");
    }
  }
  function changeEmailHandler(enteredEmail) {
    setEmailEntered(enteredEmail);
    if(validateEmail(emailEntered) && passwordEntered.length !== 0){
        setVisibleButton(false);
    }else{
        setVisibleButton(true);
    }
  }
  function changePasswordHandler(enteredPassword) {
    setPasswordEntered(enteredPassword);
    if(validateEmail(emailEntered) && enteredPassword.length !== 0){
        setVisibleButton(false);
    }else{
        setVisibleButton(true);
    }
  }
  return (
    <View>
      <View style={styles.titleContainer}>
        <Title>Inicio de Sesión</Title>
      </View>
      <UserInputField
        maxLength={100}
        onChangeText={changeEmailHandler}
        enteredText={emailEntered}
        autoCapitalize={"none"}
        autoCorrect={false}
        placeHolder={"Ingresa tu email"}
        secureTextEntry={false}
        textContentType={"emailAddress"}
        keyboardType={"email-address"}
      >
        Email
      </UserInputField>
      <UserInputField
        maxLength={100}
        onChangeText={changePasswordHandler}
        enteredText={passwordEntered}
        autoCapitalize={"none"}
        autoCorrect={false}
        placeHolder={"Ingresa tu contraseña"}
        secureTextEntry={true}
      >
        Contraseña
      </UserInputField>
      <PrimaryButton onPress={onValidAuth} disable={visibleButton}>
        Iniciar Sesión
      </PrimaryButton>
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 12,
    margin: 8,
  },
});
