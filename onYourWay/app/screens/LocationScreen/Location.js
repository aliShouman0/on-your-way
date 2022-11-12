import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import * as geoLocation from "expo-location";
import Loading from "../../components/Loading/Loading";

function Location({ navigation }) {
  const [load, setLoad] = useState(false);
  const [myLocation, setMyLocation] = useState({
    latitude: 33.450736,
    longitude: 35.396315,
  });

  useEffect(() => {
    setLoad(true);
    const getLocation = async () => {
      let { status } = await geoLocation.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }
      let getLocation = await geoLocation.getCurrentPositionAsync({});
      //  console.log("my ", getLocation);
      setMyLocation({
        latitude: getLocation.coords.latitude,
        longitude: getLocation.coords.longitude,
      });
      setLoad(false);
    };
    getLocation();
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"back"} title={"Location"} navigation={navigation} />
    </SafeAreaView>
  );
}

export default Location;
