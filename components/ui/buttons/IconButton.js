import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton() {
  return (
    <View>
      <Pressable>
        <Ionicons name="add" size={24} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({});
