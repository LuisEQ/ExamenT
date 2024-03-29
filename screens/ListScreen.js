import { StyleSheet, View, Text } from "react-native";
import IconButton from "../components/ui/buttons/IconButton";
import PacientItem from "../components/pacientInfo/PacientItem";
import Title from "../components/ui/Title";

function ListScreen({onNewItem}) {
    function addNewItemHandler(){
        {onNewItem()}
    }
    return (
        <View>
            <Title>Registro </Title>
            <PacientItem/>
            <IconButton onPress={addNewItemHandler}/>
        </View>
    )
}
    
export default ListScreen;

const styles = StyleSheet.create({});
