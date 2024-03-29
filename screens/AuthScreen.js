import { StyleSheet, View, Text } from "react-native";

import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import IconButton from "../components/ui/buttons/IconButton";
import UserInputField from "../components/ui/UserInputField";

function AuthScreen({ onValid }) {
  return (
    <View>
      <View>
        <Text>TITLE</Text>
      </View>
      <UserInputField>Email</UserInputField>
      <Text>Auth</Text>
      <PrimaryButton />
      <IconButton />
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({});
