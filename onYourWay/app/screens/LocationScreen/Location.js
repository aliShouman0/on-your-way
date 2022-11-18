import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import { Marker, Polygon } from "react-native-maps";
import * as geoLocation from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import Toast from "react-native-root-toast";
import { useQuery } from "react-query";

import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import colors from "../../config/colors";
import Constants from "expo-constants";
import Loading from "../../components/Loading/Loading";
import main from "../../config/main";

function Location({ navigation, route }) {
  const { pickupId } = route.params;
  const [load, setLoad] = useState(false);
  const [myLocation, setMyLocation] = useState({
    latitude: 33.450736,
    longitude: 35.396315,
  });
  const [userLocation, setUserLocation] = useState({
    latitude: 33.450736,
    longitude: 35.396315,
  });
  const {
    data: result,
    isError,
    error,
  } = useQuery("getLocation", () => main.getLocation(pickupId), {
    refetchOnMount: "always",
    retryOnMount: true,
    refetchInterval: 10000, 
  });

  useEffect(() => {
    const getLocation = async () => {
      setLoad(true);
      let { status } = await geoLocation.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }
      let getLocation = await geoLocation.getCurrentPositionAsync({});
      setMyLocation({
        latitude: getLocation.coords.latitude,
        longitude: getLocation.coords.longitude,
      });
      setLoad(false);
    };
    getLocation();
  }, []);
  
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
    }
    if (result && result.status === 200) {
      if (result.data.status === 1) {
        if (result.data.data.live_location) {
          const latitude = result.data.data.latitude;
          const longitude = result.data.data.longitude;
          setUserLocation({ latitude, longitude });
        } else {
          Toast.show("Location Rejected 😔", {
            duration: Toast.durations.LONG,
          });
          navigation.pop();
        }
      }
    }
  }, [result]);


  if (load) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"back"} title={"Location"} navigation={navigation} />
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={myLocation} title={"Your Location"} />

        <MapViewDirections
          origin={userLocation}
          destination={myLocation}
          apikey={Constants.manifest.extra.googleApiKey}
          strokeWidth={3}
          strokeColor={colors.darker}
        />

        <Marker coordinate={userLocation} title={"Picker Location"} />

      </MapView>
    </SafeAreaView>
  );
}

export default Location;
