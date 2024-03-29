import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CameraButton({title,icon, onPress}){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name={icon} size={28} color={'white'} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 12
    },
    button:{
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})