import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, Alert, Image } from "react-native";

import { Camera, CameraType } from "expo-camera";
import CameraButton from "../components/camera/CameraButtons";

export default function CameraScreen({ onNewCamera, imageTaken }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };
  if (!hasCameraPermission) {
    return Alert.alert(
      "No hay acceso a la cámara",
      "Se necesitan permisos de cámara para poder usarla.",
      [{ text: "Aceptar" }]
    );
  }
  function savePhotoHandler(){
    imageTaken( image);
    onNewCamera();
  }
  return (
    <View style={styles.cameraContainer}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <Text>Hello</Text>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View style={styles.afterTakeButtons}>
            <CameraButton title={'Guardar'} icon={'checkmark'} onPress={savePhotoHandler}/>
            <CameraButton title={'Tomar otra'} icon={'refresh'} onPress={()=> setImage(null)}/>
          </View>
        ) : (
          <CameraButton
            title={"Toma una foto"}
            icon={"camera"}
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    padding: 8,
    paddingBottom: 16,
  },
  camera: {
    flex: 1,
  },
  afterTakeButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  }
});
