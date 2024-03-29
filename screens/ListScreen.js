import { StyleSheet, View } from "react-native";
import IconButton from "../components/ui/buttons/IconButton";
import PacientItem from "../components/pacientInfo/PacientItem";
import Title from "../components/ui/Title";
import SearchBar from "../components/ui/SearchBar";

function ListScreen({ onNewItem }) {
    function searchBarHandler(){

    }
  function addNewItemHandler() {
    {
      onNewItem();
    }
    
  }
  return (
    <View>
      <Title>Registro </Title>
      <SearchBar onChanged={searchBarHandler}/>
      <View>
        <PacientItem />
        <PacientItem />
        <PacientItem />
      </View>
      <IconButton onPress={addNewItemHandler} />
    </View>
  );
}

export default ListScreen;

const styles = StyleSheet.create({});
