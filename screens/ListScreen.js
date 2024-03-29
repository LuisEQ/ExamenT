import { FlatList, StyleSheet, View } from "react-native";
import IconButton from "../components/ui/buttons/IconButton";
import PacientItem from "../components/pacientInfo/PacientItem";
import Title from "../components/ui/Title";
import SearchBar from "../components/ui/SearchBar";
import { RegisterData } from "../dummyinfo/dummy";

function ListScreen({ onNewItem }) {
  const displayedPacients = RegisterData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  function searchBarHandler() {}
  function addNewItemHandler() {
    {
      onNewItem();
    }
  }
  function renderPacient(itemData) {
    return (
      <PacientItem
        pacient={itemData.item.pacient}
        sym={itemData.item.symptoms}
        doctor={itemData.item.doctor}
        phone={itemData.item.phone}
      />
    );
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Registro </Title>
      <SearchBar onChanged={searchBarHandler} />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={displayedPacients}
          keyExtractor={(pacient) => pacient.id}
          renderItem={renderPacient} 
          ListFooterComponent={<View style={{height: 20}}/>}
        ></FlatList>
      </View>
      <View style={styles.button}>
        
      <IconButton onPress={addNewItemHandler} />
      </View>
    </View>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
    flatlistContainer:{
        flex:1,
    },
    rootContainer:{
        flex: 1,
    },
    button:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 4,
        padding:4
    }
});
