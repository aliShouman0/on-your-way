import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import QRCode from "react-native-qrcode-svg";

import Input from "../Input/Input";
import styles from "./styles";
import AppButton from "../AppButton/AppButton"; 
function ReceiveOrder({ refRBSheet }) {
  const completedOrderRBSheet = useRef();
  const [code, setCode] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [startScan, setStartScan] = useState(false);
  const [codeValue, setCodeValue] = useState(null);

  const windowHeight = Dimensions.get("window").height;
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

 ;

  const scan = () => {
    if (hasPermission === null) {
      alert("Requesting for camera permission");
    }
    if (hasPermission === false) {
      alert(
        "Camera permission denied Go to settings and allow it to use the camera"
      );
      return;
    }
    setScanned(false);
    setStartScan(true);
  };
  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={"fade"}
        height={startScan ? (windowHeight * 3) / 4 : (windowHeight * 3) / 5}
        customStyles={{
          draggableIcon: styles.draggableIcon,
          container: styles.container,
        }}
      >
        <View style={styles.view}>
          <QRCode
            value={codeValue ? "codeValue" : "error"}
            logoSize={100}
            logoBackgroundColor="transparent"
            backgroundColor="transparent"
            size={150}
          />
          <Text style={styles.code}>
            {codeValue ? codeValue : "Loading..."}
          </Text>
          <Input text="Code" value={code} setValue={setCode} />
          <Text style={styles.text}>Or</Text>
          <TouchableOpacity style={styles.imgScan} onPress={() => scan()}>
            <FontAwesome name="camera" size={45} style={styles.icon} />
            <Text style={styles.scan}>Scan</Text>
          </TouchableOpacity>
          <AppButton
            value={"submit"}
            onPress={() => {
              refRBSheet.current.close();
              completedOrderRBSheet.current.open();
            }}
          />
        </View>
      </RBSheet>
    </>
  );
}

export default ReceiveOrder;
