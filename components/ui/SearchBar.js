import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchBar({onChanged}) {
  const [searchBarText, setSearchBarText] = useState("");

  function searchBarHandler(text) {
    setSearchBarText(text);
    onChanged();
  }
  return (
    <View style={styles.searchSection}>
        <View style={styles.iconContainer}>
            
      <Ionicons name="search" size={24} color={"#777c7c"} />
        </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={"default"}
          maxLength={150}
          autoCapitalize={"none"}
          autoCorrect={true}
          onChangeText={searchBarHandler}
          value={searchBarText}
          placeholder={"Buscar"}
          secureTextEntry={false}
        />
      </View>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 4,
  },
  iconContainer:{
    marginHorizontal: 4,
  },
  inputContainer:{
    padding: 4,
  }
});
