import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"; 
import { MaterialIcons } from "@expo/vector-icons";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import Input from "../../components/Input/Input";
import AppButton from "../../components/AppButton/AppButton";
import UploadImage from "../../components/UploadImage/UploadImage";
import DropDownCity from "../../components/DropDownCity/DropDownCity";
import colors from "../../config/colors";

function AddOrder({ navigation }) {
  const uploadRBSheet = useRef();
  const [pay, setPay] = useState("");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("From");
  const [to, setTo] = useState("To");
  const [photo, setPhoto] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [imageFor, setImageFor] = useState("");

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
      <Navbar type={"back"} title={"Add Order"} navigation={navigation} />
      <UploadImage refRBSheet={uploadRBSheet} setImage={setPhoto} />
      <View style={styles.container}>
        <DropDownCity
          placeholder={"From"}
          setValue={setFrom}
          value={from}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          style={styles.style}
          textStyle={styles.textStyle}
          iconColor={colors.black}
        />
        <DropDownCity
          placeholder={"To"}
          setValue={setTo}
          value={to}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          style={styles.style}
          textStyle={styles.textStyle}
          iconColor={colors.black}
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
      <View style={styles.imgContainer}>
        <TouchableOpacity
          onPress={() => {
            setImageFor("mainImg");
            uploadRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={25} color="black" />
            <Text>Main Image</Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={mainImg ? { uri: mainImg } : ""}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setImageFor("image1");
            uploadRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={25} color="black" />
            <Text> Image-1 </Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={image1 ? { uri: image1 } : ""}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setImageFor("image2");
            uploadRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={25} color="black" />
            <Text> Image-2 </Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={image2 ? { uri: image2 } : ""}
          />
        </TouchableOpacity>
      </View>
      <AppButton
        value={"ADD Order"}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "MyOrder" }],
          })
        }
      />
    </SafeAreaView>
  );
}

export default AddOrder;
