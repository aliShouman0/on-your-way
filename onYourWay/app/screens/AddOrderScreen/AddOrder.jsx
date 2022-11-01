import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

function AddOrder({ navigation }) {
  const [openFrom, setOpenFrom] = useState(false);
  const [from, setFrom] = useState("From");
  const [openTo, setOpenTo] = useState(false);
  const [to, setTo] = useState("To");
  const [items, setItems] = useState([
    { label: "Tripoli", value: "Tripoli" },
    { label: "Beirut", value: "Beirut" },
    { label: "Sidon", value: "Sidon" },
    { label: "Tyre", value: "Tyre" },
    { label: "Jounie", value: "Jounie" },
    { label: "Zahle", value: "Zahle" },
    { label: "Nabatiye", value: "Nabatiye" },
    { label: "Baalbek", value: "Baalbek" },
    { label: "Amioun", value: "Amioun" },
    { label: "Baabda", value: "Baabda" },
    { label: "Marjayoun", value: "Marjayoun" },
    { label: "Jdaidet el Matn", value: "Jdaidet" },
  ]);
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
          style={styles.style}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          searchable={true}
          searchPlaceholder={"City Name"}
          itemSeparator={false}
          ArrowUpIconComponent={() => (
            <AntDesign name="up" size={24} color="black" />
          )}
          ArrowDownIconComponent={() => (
            <AntDesign name="down" size={24} color="black" />
          )}
        />
        <DropDownPicker
          placeholder="To"
          open={openTo}
          value={to}
          items={items}
          setOpen={setOpenTo}
          setValue={setTo}
          setItems={setItems}
          textStyle={styles.textStyle}
          containerStyle={styles.containerStyle}
          style={styles.style}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          searchable={true}
          searchPlaceholder={"City Name"}
          itemSeparator={false}
          ArrowUpIconComponent={() => (
            <AntDesign name="up" size={24} color="black" />
          )}
          ArrowDownIconComponent={() => (
            <AntDesign name="down" size={24} color="black" />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default AddOrder;
