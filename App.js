import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuthScreen from "./screens/AuthScreen";
import ListScreen from "./screens/ListScreen";

export default function App() {
  const [authValid, setAuthValid] = useState(false);

  let screen = <AuthScreen onValid={authValidHandler} />;
  function authValidHandler() {
    setAuthValid(true);
  }
  function onAuthSuccesfull() {
    screen = <ListScreen />;
  }
  if(authValid){
    onAuthSuccesfull();
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
