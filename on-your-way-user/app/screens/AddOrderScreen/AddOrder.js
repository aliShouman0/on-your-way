import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { useMutation } from "react-query";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import Input from "../../components/Input/Input";
import AppButton from "../../components/AppButton/AppButton";
import UploadImage from "../../components/UploadImage/UploadImage";
import DropDownCity from "../../components/DropDownCity/DropDownCity";
import colors from "../../config/colors";
import main from "../../config/main";
import Loading from "../../components/Loading/Loading";

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
  const {
    mutate,
    isError,
    isLoading,
    error,
    data: result,
  } = useMutation(main.addOrder);

  const saveImage = async (by) => {
    if (photo) {
      switch (imageFor) {
        case "mainImg":
          setMainImg(photo);
          break;
        case "image1":
          setImage1(photo);

          break;
        case "image2":
          setImage2(photo);

          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    saveImage(imageFor);
  }, [photo]);

  const addOrder = () => {
    if (
      !from ||
      !to ||
      !description ||
      !pay ||
      !mainImg ||
      !image2 ||
      !image2
    ) {
      alert("All inputs including the 3 images are required");
      return;
    }
    const data = new FormData();
    data.append("from", from);
    data.append("to", to);
    data.append("description", description);
    data.append("pay", pay);
    data.append("main_image", mainImg.base64);
    data.append("image1", image1.base64);
    data.append("image2", image2.base64);
    mutate(data);
  };

  useEffect(() => {
    if (
      isError ||
      (result &&
        (result === 401 || result === 400 || result === 0 || result === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
      });
      console.log(error);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }

    if (result && result.status === 200) {
      if (result.data.status === 1) {
        Toast.show("Add Order Done ", {
          duration: Toast.durations.LONG,
        });
        navigation.navigate("MyOrder");
      }
    }
  }, [result, isError]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"back"} title={"Add Order"} navigation={navigation} />
      <UploadImage refRBSheet={uploadRBSheet} setImage={setPhoto} />
      <View style={styles.container}>
        <View style={styles.DropDownContainer}>
          <Text style={styles.label}>From</Text>
          <DropDownCity
            placeholder={"From"}
            setValue={setFrom}
            value={from}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            style={styles.style}
            textStyle={styles.textStyle}
            iconColor={colors.black}
            searchTextInputStyle={styles.searchTextInputStyle}
            containerStyle={styles.containerStyle}
          />
        </View>
        <View style={styles.DropDownContainer}>
          <Text style={styles.label}>To</Text>
          <DropDownCity
            placeholder={"To"}
            setValue={setTo}
            value={to}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            style={styles.style}
            textStyle={styles.textStyle}
            iconColor={colors.black}
            searchTextInputStyle={styles.searchTextInputStyle}
            containerStyle={styles.containerStyle}
          />
        </View>
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
          {!mainImg && (
            <View style={styles.icon}>
              <MaterialIcons
                name="add-photo-alternate"
                size={25}
                color="black"
              />
              <Text>Main Image</Text>
            </View>
          )}
          <Image
            resizeMode="stretch"
            style={styles.img}
            source={mainImg ? { uri: mainImg.uri } : ""}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setImageFor("image1");
            uploadRBSheet.current.open();
          }}
        >
          {!image1 && (
            <View style={styles.icon}>
              <MaterialIcons
                name="add-photo-alternate"
                size={25}
                color="black"
              />
              <Text> Image-1 </Text>
            </View>
          )}
          <Image
            resizeMode="stretch"
            style={styles.img}
            source={image1 ? { uri: image1.uri } : ""}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setImageFor("image2");
            uploadRBSheet.current.open();
          }}
        >
          {!image2 && (
            <View style={styles.icon}>
              <MaterialIcons
                name="add-photo-alternate"
                size={25}
                color="black"
              />
              <Text> Image-2 </Text>
            </View>
          )}
          <Image
            resizeMode="stretch"
            style={styles.img}
            source={image2 ? { uri: image2.uri } : ""}
          />
        </TouchableOpacity>
      </View>
      <AppButton value={"ADD Order"} onPress={addOrder} />
    </SafeAreaView>
  );
}

export default AddOrder;
