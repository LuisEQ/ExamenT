import { StyleSheet, View, Text } from "react-native";
import IconButton from "../components/ui/buttons/IconButton";

function ListScreen({onNewItem}) {
    function addNewItemHandler(){
        {onNewItem()}
    }
    return (
        <View>
            <Text> ListScreen</Text>
            <IconButton onPress={addNewItemHandler}/>
        </View>
    )
}
    
export default ListScreen;

const styles = StyleSheet.create({});
