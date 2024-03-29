import { Pressable, StyleSheet, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

function IconButton({onPress}) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: Colors.primary200 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed,styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <View style={styles.iconContainer}>
            
        <Ionicons name="add" size={22} color={"white"} />
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
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    paddingHorizontal: 14,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 25,
    width: 50,
    height: 50,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    
  },
  pressed: {
    opacity: 0.5,
  },
  iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});
