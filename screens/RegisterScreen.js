import { useState } from "react";
import { StyleSheet, View, Image, Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import Title from "../components/ui/Title";
import UserInputField from "../components/ui/UserInputField";

function RegisterScreen({ onNewPacient }) {
  const [date, setDate] = useState(new Date());
  const [enteredDate, setEnteredDate] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [enteredPacient, setEnteredPacient] = useState();
  const [enteredDoctor, setEnteredDoctor] = useState();
  const [enteredPhone, setEnteredPhone] = useState();
  const [enteredSym, setEnteredSym] = useState();

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setEnteredDate(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  };
  function changeDateHandler() {}
  function changePacientHandler() {}
  function changeDoctorHandler() {}
  function changePhoneHandler() {}
  function changeSymHandler() {}
  function cameraHandler() {}
  return (
    <View>
      <Title>Registro</Title>
      <View>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChangeDate}
          />
        )}

        <Pressable onPress={toggleDatepicker}>
          <UserInputField
            keyboardType={'default'}
            maxLength={100}
            onChangeText={changeDateHandler}
            enteredText={enteredDate}
            autoCapitalize={"none"}
            autoCorrect={false}
            placeHolder={"Ingresa la fecha"}
            secureTextEntry={false}
            editable={false}
          >
            Fecha
          </UserInputField>
        </Pressable>

        <UserInputField
          maxLength={150}
          onChangeText={changePacientHandler}
          enteredText={enteredPacient}
          autoCapitalize={"words"}
          autoCorrect={true}
          placeHolder={"Nombre del Pasiente"}
          secureTextEntry={false}
          textContentType={"name"}
          keyboardType={"default"}
        >
          Paciente
        </UserInputField>
        <UserInputField
          maxLength={150}
          onChangeText={changeDoctorHandler}
          enteredText={enteredDoctor}
          autoCapitalize={"words"}
          autoCorrect={true}
          placeHolder={"Nombre del Doctor"}
          secureTextEntry={false}
          textContentType={"name"}
          keyboardType={"default"}
        >
          Doctor
        </UserInputField>
        <UserInputField
          maxLength={10}
          onChangeText={changePacientHandler}
          enteredText={enteredPacient}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeHolder={"Teléfono del doctor"}
          secureTextEntry={false}
          textContentType={"telephoneNumber"}
          keyboardType={"number-pad"}
        >
          Teléfono
        </UserInputField>
        <UserInputField
          maxLength={1024}
          onChangeText={changeSymHandler}
          enteredText={enteredSym}
          autoCapitalize={"sentences"}
          autoCorrect={true}
          placeHolder={"Describa el malestar presentado"}
          secureTextEntry={false}
          textContentType={"name"}
          keyboardType={"default"}
        >
          Malestar/Síntomas
        </UserInputField>
      </View>

      <PrimaryButton onPress={cameraHandler}>Capturar receta</PrimaryButton>
      <PrimaryButton onPress={onNewPacient}>Guardar</PrimaryButton>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({});
