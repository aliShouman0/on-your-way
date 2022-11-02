import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import Input from "../../components/Input/Input";
import UploadImage from "../../components/UploadImage/UploadImage";

function AddOrder({ navigation }) {
  const uploadRBSheet = useRef();
  const [pay, setPay] = useState("");
  const [description, setDescription] = useState("");
  const [openFrom, setOpenFrom] = useState(false);
  const [from, setFrom] = useState("From");
  const [openTo, setOpenTo] = useState(false);
  const [to, setTo] = useState("To");
  const [photo, setPhoto] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [imageFor, setImageFor] = useState("");
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

  const saveImage = async (by) => {
    if (photo) {
      switch (imageFor) {
        case "mainImg":
          setMainImg(photo.uri);
          break;
        case "image1":
          setImage1(photo.uri);

          break;
        case "image2":
          setImage2(photo.uri);

          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    saveImage(imageFor);
  }, [photo]);

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Add Order"} navigation={navigation} />
      <UploadImage refRBSheet={uploadRBSheet} setImage={setPhoto} />
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
      <Input
        text="Description"
        value={description}
        setValue={setDescription}
        style={styles.input}
      />
      <Input
        text="Pay"
        value={pay}
        setValue={setPay}
        style={styles.input}
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

export default AddOrder;
