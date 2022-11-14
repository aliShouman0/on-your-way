import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Toast from "react-native-root-toast";
import { useMutation } from "react-query";
import Loading from "../Loading/Loading";

import Input from "../Input/Input.js";
import AppButton from "../AppButton/AppButton";
import styles from "./styles";
import main from "../../config/main.js";

function CancelOrder({ refRBSheet, setRefreshing, pickupId }) {
  const [reason, setReason] = useState("");
  const windowHeight = Dimensions.get("window").height;
  const {
    mutate,
    isError,
    isLoading,
    error,
    data: result,
  } = useMutation(main.cancelOrder);

  const onCancel = () => {
    if (!reason) {
      alert("Please specify reason of canceling");
      return;
    }
    const data = new FormData();
    data.append("reason", reason);
    data.append("pickup_id", pickupId);
    mutate(data);
  };

  if (
    isError ||
    (result &&
      (result === 401 || result === 400 || result === 0 || result === 500))
  ) {
    Toast.show("Some Thing went Wrong 😔", {
      duration: Toast.durations.LONG,
      containerStyle: { marginBottom: (windowHeight * 11) / 20 },
    });
    console.log(error);
  }

  if (result && result.status === 200) {
    if (result.data.status === 1) {
      main.save("access_token", result.data.refresh);
      Toast.show("Canceling Done !! ", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: (windowHeight * 11) / 20 },
      });
      setRefreshing();
    }
  }

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      animationType={"fade"}
      height={(windowHeight * 11) / 20}
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
            <Text style={styles.textTitle}>Are you sure ?</Text>
            <Text style={styles.textSmall}>
              Please specify why You are cancelling
            </Text>
            <Input
              text="Reason"
              value={reason}
              setValue={setReason}
              multiline={true}
              style={styles.input}
            />
            <Text style={styles.note}>
              Note: that will affect your rate if the pickup accepted
            </Text>
            <AppButton value={"Cancel"} onPress={onCancel} />
          </View>
        </>
      )}
    </RBSheet>
  );
}

export default CancelOrder;
