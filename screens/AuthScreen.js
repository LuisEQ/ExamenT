import { StyleSheet, View, Text } from "react-native";

import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import IconButton from "../components/ui/buttons/IconButton";
import UserInputField from "../components/ui/UserInputField";
import Title from "../components/ui/Title";

function AuthScreen({ onValid }) {
    function onValidAuth(){
        {onValid()}
    }
  return (
    <View>
        <View style={styles.titleContainer}>
            <Title>Inicio de Sesión</Title>
        </View>
      <UserInputField>Email</UserInputField>
      <UserInputField>Contraseña</UserInputField>
      <PrimaryButton onPress={onValidAuth}>Iniciar Sesión</PrimaryButton>
      <IconButton />
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
    titleContainer:{
        marginTop: 12,
    },
});
