import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import AuthScreen from "./screens/AuthScreen";
import ListScreen from "./screens/ListScreen";
import RegisterScreen from "./screens/RegisterScreen";

export default function App() {
  const [authValid, setAuthValid] = useState(false);
  const [newRegister, setNewRegister] = useState(false);

  let screen = <AuthScreen onValid={authValidHandler} />;
  function authValidHandler() {
    setAuthValid(true);
  }
  function newRegisterHandler(){
    setNewRegister(true);
  }
  function newPacientHandler(){
    setNewRegister(false);
  }
  if(authValid){
    if(newRegister){
      
      screen = (<RegisterScreen onNewPacient={newPacientHandler}/>)
    }else{

      screen = (<ListScreen onNewItem={newRegisterHandler}/>);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>{screen}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    marginTop: 24,
  },
});
