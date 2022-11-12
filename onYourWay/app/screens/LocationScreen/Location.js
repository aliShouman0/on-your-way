import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import { Marker, Polygon } from "react-native-maps";
import * as geoLocation from "expo-location"; 
import MapViewDirections from "react-native-maps-directions";

import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import colors from "../../config/colors";
import Constants from "expo-constants";
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
    return <Loading/>
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
        onUserLocationChange={(e) => {
          //   console.log("e", e.nativeEvent.coordinate);
          // setMyLocation({
          //   longitude: e.nativeEvent.longitude,
          //   latitude: e.nativeEvent.latitude,
          // });
        }}
      >
        <Marker coordinate={myLocation} title={"Your Location"} />

        <MapViewDirections
          origin={{
            latitude: 33.88863,
            longitude: 35.49548,
          }}
          destination={myLocation}
          apikey={Constants.manifest.extra.googleApiKey}
          strokeWidth={3}
          strokeColor={colors.darker}
        />
        <Marker
          coordinate={{
            latitude: 33.88863,
            longitude: 35.49548,
          }}
          title={"Picker Location"}
        />
      </MapView>
    </SafeAreaView>
  );
}

export default Location;
