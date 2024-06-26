import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import IconButton from "../components/ui/buttons/IconButton";
import PacientItem from "../components/pacientInfo/PacientItem";
import Title from "../components/ui/Title";
import SearchBar from "../components/ui/SearchBar";

import AsyncStorage from "@react-native-async-storage/async-storage";


function ListScreen({ onNewItem }) {
  const [searchBarText, setSearchBarText] = useState("");
  const [flatlistArray, setFlatlistArray] = useState();
  
  let displayedPacients = flatlistArray?.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  useEffect(()=>{
     getRegister();
  },[])
    
 
  const getRegister = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        setFlatlistArray(jsonValue != null ? JSON.parse(jsonValue) : null);
        return flatlistArray;
      } catch (e) {
        console.log(e);
      }
  };
  function searchBarHandler(text) {
    setSearchBarText(text);
    if(text.length !== 0){
        displayedPacients = flatlistArray.filter((a) => {
            return (
              a.doctor.toUpperCase().includes(searchBarText.toUpperCase()) ||
              a.pacient.toUpperCase().includes(searchBarText.toUpperCase()) ||
              a.symptoms.toUpperCase().includes(searchBarText.toUpperCase())
            );
          });
    }else{
        displayedPacients = flatlistArray?.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
    }
    
  }
  function addNewItemHandler() {
    {
      onNewItem();
    }
  }
  function renderPacient(itemData) {
    
        if(searchBarText.length !== 0 && (itemData.item.doctor.toUpperCase().includes(searchBarText.toUpperCase()) ||
        itemData.item.pacient.toUpperCase().includes(searchBarText.toUpperCase()) ||
        itemData.item.symptoms.toUpperCase().includes(searchBarText.toUpperCase()))){
            return(
                <PacientItem
        pacient={itemData.item.pacient}
        sym={itemData.item.symptoms}
        doctor={itemData.item.doctor}
        phone={itemData.item.phone}
        image={itemData.item.image}
      />
            )
        }else if(searchBarText.length === 0){
            return(
                <PacientItem
        pacient={itemData.item.pacient}
        sym={itemData.item.symptoms}
        doctor={itemData.item.doctor}
        phone={itemData.item.phone}
        image={itemData.item.image}
      />
            )
            
        }
      
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Registro </Title>
      <SearchBar searchBarText={searchBarText} onChanged={searchBarHandler} />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={displayedPacients}
          keyExtractor={(pacient) => pacient.id}
          renderItem={renderPacient}
          ListFooterComponent={<View style={{ height: 20 }} />}
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
  flatlistContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    margin: 12,
    marginTop: 32,
  },
  button: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 4,
    padding: 4,
  },
});
