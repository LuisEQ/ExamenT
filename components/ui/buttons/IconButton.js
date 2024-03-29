import { Pressable, StyleSheet, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

function IconButton() {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <View style={styles.iconContainer}>
          <Ionicons name="add" size={24} color={'white'} />
        </View>
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        overflow: Platform.OS === "android" ? "hidden" : "visible",
      },
      buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        paddingHorizontal: 14,
        marginVertical: 8,
        borderRadius: 6,
      },
      pressed: {
        opacity: 0.5,
      },
      iconContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
});
