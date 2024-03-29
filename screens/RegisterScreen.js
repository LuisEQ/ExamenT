import { StyleSheet, View, Image } from "react-native";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import Title from "../components/ui/Title";
import UserInputField from "../components/ui/UserInputField";

function RegisterScreen({ onNewPacient }) {
    function cameraHandler(){

    }
  return (
    <View>
      <Title>Registro</Title>
      <View>
        <UserInputField>Fecha</UserInputField>
        <UserInputField>Paciente</UserInputField>
        <UserInputField>Doctor</UserInputField>
        <UserInputField>Teléfono</UserInputField>
        <UserInputField>Malestar/Síntomas</UserInputField>
      </View>
      
      <PrimaryButton onPress={cameraHandler}>Capturar receta</PrimaryButton>
      <PrimaryButton onPress={onNewPacient}>Guardar</PrimaryButton>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({});
