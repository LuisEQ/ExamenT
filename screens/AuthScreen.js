import { StyleSheet, View } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import IconButton from "../components/ui/buttons/IconButton";
import UserInputField from "../components/ui/UserInputField";
import Title from "../components/ui/Title";

function AuthScreen({ onValid }) {
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function onValidAuth() {
    if (validateEmail(emailEntered)) {
      {
        console.log("Valid email");
        onValid();
      }
    } else {
      console.log("Invalid Email");
    }
  }
  function changeEmailHandler(enteredEmail) {
    setEmailEntered(enteredEmail);
  }
  function changePasswordHandler(enteredPassword) {
    setPasswordEntered(enteredPassword);
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
      <PrimaryButton onPress={onValidAuth}>Iniciar Sesión</PrimaryButton>
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 12,
  },
});
