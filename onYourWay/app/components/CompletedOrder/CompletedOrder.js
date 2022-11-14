import React, { useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import Loading from "../Loading/Loading";

import Rate from "../Rate/Rate";
import Input from "../Input/Input";
import AppButton from "../AppButton/AppButton";
import styles from "./styles";
import main from "../../config/main";
import { useMutation } from "react-query";
function CompletedOrder({ refRBSheet, setRefreshing, pickupId, orderId }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(3);
  const windowHeight = Dimensions.get("window").height;
  const {
    mutate,
    isError,
    isLoading,
    error,
    data: result,
  } = useMutation(main.receivedOrder);

  if (rate < 0) setRate(0);
  if (rate > 5) setRate(5);

  const onSubmit = () => {
    if (!comment) {
      alert("Please Add your comment");
      return;
    } 
  };
 

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={false}
      closeOnPressMask={false}
      animationType={"fade"}
      height={windowHeight / 2}
      customStyles={{
        draggableIcon: styles.draggableIcon,
        container: styles.container,
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Congrats </Text>
            <View style={styles.rateView}>
              <Rate rate={rate} styleText={styles.rate} size={28} />
              <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setRate(rate + 1)}>
                  <FontAwesome5
                    name="plus-circle"
                    size={30}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRate(rate - 1)}>
                  <FontAwesome5
                    name="minus-circle"
                    size={30}
                    style={styles.icon}
                  />
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
            <AppButton value={"submit"} onPress={onSubmit} />
          </View>
        </>
      )}
    </RBSheet>
  );
}

export default CompletedOrder;
