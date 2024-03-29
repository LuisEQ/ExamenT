import { Pressable, StyleSheet, View, Text, Platform } from "react-native";
import Colors from "../../../constants/Colors";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <View style={styles.buttonTitle}>
          <Text style={styles.title}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

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
  buttonTitle: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
