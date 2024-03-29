import { View, Text, StyleSheet, Image } from "react-native";
function PacientItem({ pacient, sym, doctor, phone, image }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          alt={pacient}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>Paciente: {pacient}</Text>
        <Text >Malestar: {sym}</Text>
        <Text>Doctor: {doctor}</Text>
        <Text>Tél: {phone}</Text>
      </View>
    </View>
  );
}

export default PacientItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    flexDirection: "row",
    margin: 12,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    width: '80%',
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
  infoContainer: {
    padding: 6,
    margin: 6,
  },
});
