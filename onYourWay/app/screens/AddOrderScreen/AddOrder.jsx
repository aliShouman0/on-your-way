import React, { useState } from "react";
import { SafeAreaView, View } from "react-native"; 

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

function AddOrder({ navigation }) { 
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Add Order"} navigation={navigation} />
      <View style={styles.city}>
        <DropDownPicker
          placeholder="From"
          open={openFrom}
          value={from}
          items={items}
          setOpen={setOpenFrom}
          setValue={setFrom}
          setItems={setItems}
          textStyle={styles.textStyle}
          containerStyle={styles.containerStyle} 
          itemSeparator={false} 
        />
      </View>
    </SafeAreaView>
  );
}

export default AddOrder;
