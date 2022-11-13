import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useMutation } from "react-query";
import Toast from "react-native-root-toast";

import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import UploadImage from "../../components/UploadImage/UploadImage";
import Loading from "../../components/Loading/Loading";
import firebaseHelper from "../../config/firebaseHelper";
import main from "../../config/main";

function NextSignupScreen({ navigation, route }) {
  const uploadRBSheet = useRef();
  const [image, setImage] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [frontId, setFrontId] = useState(null);
  const [backId, setBackId] = useState(null);
  const [imageFor, setImageFor] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const { email, name, phone, address, password, date } = route.params;
  const {
    mutate: signUp,
    isError,
    isLoading,
    error: signUpError,
    data,
  } = useMutation((user) => main.signUp(user));

  const onHandleSignup = async () => {
    if (!photo || !frontId || !backId) {
      alert("All Image Are Required");
      return;
    }
    setLoad(true);
    //sign up user on firebase if not exist
    firebaseHelper.onSignup(phone, email, name, setError);
    if (error) {
      alert(error);
      setError("");
      setLoad(false);
      return;
    }
    const data = new FormData();
    data.append("name", name);
    data.append("birthday", date);
    data.append("email", email);
    data.append("phone", phone);
    data.append("address", address);
    data.append("password", password);
    data.append("avatar", photo.base64);
    data.append("front_id_photo", frontId.base64);
    data.append("back_id_photo", backId.base64);
    //  sign up user on local server
    signUp(data);
    if (isError || (result && (result === 401 || result === 400))) {
      alert("Some Thing went Wrong 😔");
      setError("");
      setLoad(false);
      return;
    }
    Toast.show("Sign up Successfully!", {
      duration: Toast.durations.LONG,
    });
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const saveImage = async () => {
    if (image) {
      switch (imageFor) {
        case "photo":
          setPhoto(image);
          break;
        case "frontId":
          setFrontId(image);
          break;
        case "backId":
          setBackId(image);
          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    saveImage();
  }, [image]);

  if (load || isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.mainView}>
      <UploadImage refRBSheet={uploadRBSheet} setImage={setImage} />
      <Navbar type={"back"} title={"Register"} navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.text}>Upload your profile photo</Text>
        <TouchableOpacity
          onPress={() => {
            setImageFor("photo");
            uploadRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="camera-plus"
              size={35}
              color="black"
            />
            <Text>Your Photo</Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={photo ? { uri: photo.uri } : ""}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Upload the required docs</Text>
      <View style={styles.idContainer}>
        <TouchableOpacity
          onPress={() => {
            setImageFor("frontId");
            uploadRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={35} color="black" />
            <Text>Front ID </Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.imgId}
            source={frontId ? { uri: frontId.uri } : ""}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setImageFor("backId");
            uploadRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={35} color="black" />
            <Text>Back ID </Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.imgId}
            source={backId ? { uri: backId.uri } : ""}
          />
        </TouchableOpacity>
      </View>
      <AppButton value={"SIGNUP"} onPress={onHandleSignup} />
    </SafeAreaView>
  );
}

export default NextSignupScreen;
