import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuthScreen from "./screens/AuthScreen";

export default function App() {
  const [authValid, setAuthValid] = useState(false);

  function authValidHandler() {
    setAuthValid(true);
  }

  let screen = <AuthScreen onValid={authValidHandler} />;
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
