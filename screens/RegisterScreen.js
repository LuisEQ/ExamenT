import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import Title from "../components/ui/Title";
import UserInputField from "../components/ui/UserInputField";
import Register from "../models/register";
import AsyncStorage from "@react-native-async-storage/async-storage";

function RegisterScreen({ onNewPacient, onNewCamera, imageTaken }) {
  const [date, setDate] = useState(new Date());
  const [enteredDate, setEnteredDate] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [enteredPacient, setEnteredPacient] = useState();
  const [enteredDoctor, setEnteredDoctor] = useState();
  const [enteredPhone, setEnteredPhone] = useState();
  const [enteredSym, setEnteredSym] = useState();
  const [disableButton, setDisableButton] = useState(true);

  const enteredPhoto = imageTaken;
  let newRegister;

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
  function disableButtonHandler() {
    if (
      enteredPacient === undefined ||
      enteredDoctor === undefined ||
      enteredSym === undefined ||
      enteredPhone === undefined ||
      enteredPhoto === undefined
    ) {
      
    }else{
        if (
            enteredPacient.length !== 0 &&
            enteredDoctor.length !== 0 &&
            enteredPhone.length === 10 &&
            enteredSym.length !== 0
          ) {
            setDisableButton(false);
          }
    }
  }
  function changeDateHandler(enteredData) {}
  function changePacientHandler(enteredData) {
    setEnteredPacient(enteredData);
    disableButtonHandler();
  }
  function changeDoctorHandler(enteredData) {
    setEnteredDoctor(enteredData);
    disableButtonHandler();
  }
  function changePhoneHandler(enteredData) {
    setEnteredPhone(enteredData);
    disableButtonHandler();
  }
  function changeSymHandler(enteredData) {
    setEnteredSym(enteredData);
    disableButtonHandler();
  }
  function cameraHandler() {
    onNewCamera();
  }
  const onSubmit = async () => {
    if (
      enteredPacient === undefined ||
      enteredDoctor === undefined ||
      enteredSym === undefined ||
      enteredPhone === undefined ||
      enteredPhoto === undefined
    ) {
      Alert.alert(
        "Registro no agregado",
        "El registro tuvo datos inválidos, por favor intentarlo de nuevo",
        [{ text: "Aceptar" }]
      );
    } else {
      if (
        enteredPacient.length !== 0 &&
        enteredDoctor.length !== 0 &&
        enteredSym.length !== 0 &&
        enteredPhone.length !== 0 &&
        enteredPhoto.length !== 0
      ) {
        newRegister = new Register(
          Math.floor(Math.random() * 10000),
          enteredDate,
          enteredPacient,
          enteredDoctor,
          enteredPhone,
          enteredSym,
          enteredPhoto
        );
        try {
          let existingRegister = await getRegister();
          if (existingRegister === null) {
            const updatedRegister = [newRegister];
            await AsyncStorage.setItem(
              "my-key",
              JSON.stringify(updatedRegister)
            );
          } else {
            const updatedRegister = [...existingRegister, newRegister];
            await AsyncStorage.setItem(
              "my-key",
              JSON.stringify(updatedRegister)
            );
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        Alert.alert(
          "Registro no agregado",
          "El registro tuvo datos inválidos, por favor intentarlo de nuevo",
          [{ text: "Aceptar" }]
        );
      }
    }
    onNewPacient();
  };
  const getRegister = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("my-key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
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
            keyboardType={"default"}
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
          onChangeText={changePhoneHandler}
          enteredText={enteredPhone}
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
      <View style={styles.imageContainer}>
        <Image source={{ uri: enteredPhoto }} style={styles.image} />
      </View>
      <PrimaryButton onPress={onSubmit} disable={disableButton}>
        Guardar
      </PrimaryButton>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    marginTop: 32,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});
