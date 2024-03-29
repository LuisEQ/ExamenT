import { View, Text, TextInput, StyleSheet } from "react-native";


import Colors from "../../constants/Colors";

function UserInputField({onChangeText, enteredText, children}){
    
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.title}>{children}</Text>
            <TextInput maxLength={100} autoCapitalize={'none'} autoCorrect={false} onChangeText={onChangeText} value={enteredText}/>
        </View>
    )
}

export default UserInputField;

const styles = StyleSheet.create({
    rootContainer:{
        margin: 12,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary500,

    }
})