import { View, Text, StyleSheet} from "react-native";

function Title({children}){
    return(
        
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer:{
        margin: 12,
    },
    
    title:{
        fontSize: 22,
        fontWeight: 'bold',
    }
})