import React, { useEffect, useState } from "react";
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
function CompletedOrder({
  refRBSheet,
  setRefreshing,
  pickupId,
  orderId,
  isReceiver,
  navigation,
}) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(3);
  const windowHeight = Dimensions.get("window").height;
  const {
    mutate,
    isError,
    isLoading,
    error,
    data: result,
  } = useMutation(isReceiver ? main.receivedOrder : main.completePickup);

  if (rate < 0) setRate(0);
  if (rate > 5) setRate(5);

  const onSubmit = () => {
    if (!comment) {
      alert("Please Add your comment");
      return;
    }
    const data = new FormData();
    if (isReceiver) {
      data.append("receiver_comment", comment);
      data.append("receiver_rated", rate);
    } else {
      data.append("picker_comment", comment);
      data.append("picker_rated", rate);
    }
    data.append("pickup_id", pickupId);
    mutate(data);
  };
  useEffect(() => {
    if (
      isError ||
      (result &&
        (result === 401 ||   result === 0 || result === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: windowHeight / 2 },
      });
      console.log(error);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }

    if (result && result.status === 200) {
      if (result.data.status === 1) {
        Toast.show("Done!! ", {
          duration: Toast.durations.LONG,
          containerStyle: { marginBottom: windowHeight / 2 },
        });
        setRefreshing();
      }
    }
  }, [result]);
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
