import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import AuthScreen from "./screens/AuthScreen";
import ListScreen from "./screens/ListScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CameraScreen from "./screens/CameraScreen";

export default function App() {
  const [authValid, setAuthValid] = useState(false);
  const [newRegister, setNewRegister] = useState(false);
  const [newCamera, setNewCamera] = useState(false);
  const [newPhoto, setNewPhoto] = useState();
  let screen = <AuthScreen onValid={authValidHandler} />;
  function authValidHandler() {
    setAuthValid(true);
  }
  function newRegisterHandler() {
    setNewRegister(true);
  }
  function newPacientHandler() {
    setNewRegister(false);
  }
  function newCameraHandler() {
    setNewCamera(true);
  }
  function turnOffCameraHandler() {
    setNewCamera(false);
  }
  const imageTakenHandler = (data) => {
    setNewPhoto(data);
  }

  if (authValid) {
    if (newRegister) {
      if (newCamera) {
        screen = (
          <CameraScreen
            onNewCamera={turnOffCameraHandler}
            imageTaken={imageTakenHandler}
          />
        );
      } else {
        screen = (
          <RegisterScreen
            onNewPacient={newPacientHandler}
            onNewCamera={newCameraHandler}
            imageTaken={newPhoto}
          />
        );
      }
    } else {
      screen = <ListScreen onNewItem={newRegisterHandler} />;
    }
  }
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
