import React, { useState } from "react";
import { Dimensions, Text, View  } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet"; 
import QRCode from "react-native-qrcode-svg";

import Input from "../Input/Input";
import styles from "./styles"; 
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
           
        </View>
      </RBSheet>
    </>
  );
}

export default ReceiveOrder;
