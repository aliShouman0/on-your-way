import React, { useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet"; 
import { FontAwesome5 } from "@expo/vector-icons";

import Rate from "../Rate/Rate";
import Input from "../Input/Input";
import AppButton from "../AppButton/AppButton";
import styles from "./styles";
function CompletedOrder({ refRBSheet }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(3);
  const windowHeight = Dimensions.get("window").height;
  if (rate < 0) setRate(0);
  if (rate > 5) setRate(5);
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      animationType={"fade"}
      height={windowHeight / 2}
      customStyles={{
        draggableIcon: styles.draggableIcon,
        container: styles.container,
      }}
    >
      <View style={styles.view}>
        <Text style={styles.textTitle}>Congrats </Text>

        <View style={styles.rateView}>
          <Rate rate={rate} styleText={styles.rate} size={28} />
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => setRate(rate + 1)}> 
              <FontAwesome5 name="plus-circle" size={30} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRate(rate - 1)}> 
              <FontAwesome5 name="minus-circle" size={30} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Input
          text="Comment"
          value={comment}
          placeholder={"Comments,Your experience,Notes"}
          setValue={setComment}
          multiline={true}
          style={styles.input}
        />

         
      </View>
    </RBSheet>
  );
}

export default CompletedOrder;
