import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import QRCode from "react-native-qrcode-svg";
import Toast from "react-native-root-toast";

import Input from "../Input/Input";
import styles from "./styles";
import AppButton from "../AppButton/AppButton";
import CompletedOrder from "../CompletedOrder/CompletedOrder";
function ReceiveOrder({
  refRBSheet,
  setRefreshing,
  pickupId,
  orderId,
  isReceiver,
  navigation,
}) {
  const ReceiverCode = `${orderId + pickupId}?${orderId}@${pickupId}`;
  const pickerCode = `${pickupId}?${orderId}@${orderId + pickupId}`;
  const completedOrderRBSheet = useRef();
  const [code, setCode] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [startScan, setStartScan] = useState(false);
  const [codeValue, setCodeValue] = useState(
    isReceiver ? ReceiverCode : pickerCode
  );
  const windowHeight = Dimensions.get("window").height;
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setStartScan(false);
    setCode(data);
  };

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

  const onSubmit = () => {
    if (!code) {
      alert("Please Scan The code ");
      return;
    }
    if (code != (isReceiver ? pickerCode : ReceiverCode)) {
      alert("Wrong Code");
      return;
    }
    Toast.show("Order completed", {
      duration: Toast.durations.LONG,
      containerStyle: { marginBottom: (windowHeight * 3) / 5 },
    });
    refRBSheet.current.close();
    completedOrderRBSheet.current.open();
  };
  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={"fade"}
        height={startScan ? (windowHeight * 3) / 4 : (windowHeight * 3) / 4}
        customStyles={{
          draggableIcon: styles.draggableIcon,
          container: styles.container,
        }}
      >
        <View style={styles.view}>
          {startScan ? (
            <>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.barCodeScanner}
              />
              <AppButton
                value={"Cancel"}
                onPress={() => {
                  setStartScan(false);
                }}
              />
            </>
          ) : (
            <>
              <QRCode
                value={codeValue ? codeValue : "error"}
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
              <AppButton value={"submit"} onPress={onSubmit} style={styles.btn} />
            </>
          )}
        </View>
      </RBSheet>
      <CompletedOrder
        refRBSheet={completedOrderRBSheet}
        setRefreshing={setRefreshing}
        pickupId={pickupId}
        orderId={orderId}
        isReceiver={isReceiver}
        navigation={navigation}
      />
    </>
  );
}

export default ReceiveOrder;
