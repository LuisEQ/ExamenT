import { View, Text, TextInput, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function UserInputField({
  maxLength,
  onChangeText,
  enteredText,
  children,
  autoCapitalize,
  autoCorrect,
  placeHolder,
  secureTextEntry,
  textContentType,
  keyboardType,
  
}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{children}</Text>
      <TextInput
        textContentType={textContentType}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        value={enteredText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default UserInputField;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 12,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
