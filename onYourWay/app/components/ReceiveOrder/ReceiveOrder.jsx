import React, { useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

import Input from "../Input/Input";
import styles from "./styles";
import AppButton from "../AppButton/AppButton";
function ReceiveOrder({ refRBSheet }) {
  const [code, setCode] = useState("");
  const [startScan, setStartScan] = useState(false);
  const [codeValue, setCodeValue] = useState(null);

  const windowHeight = Dimensions.get("window").height;

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
          <TouchableOpacity style={styles.imgScan} onPress={() => {}}>
            <FontAwesome name="camera" size={45} style={styles.icon} />
            <Text style={styles.scan}>Scan</Text>
          </TouchableOpacity>
          <AppButton value={"submit"} onPress={() => {}} />
        </View>
      </RBSheet>
    </>
  );
}

export default ReceiveOrder;
