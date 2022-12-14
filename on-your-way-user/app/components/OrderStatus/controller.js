import { useEffect } from "react";
import { Dimensions } from "react-native";
import * as geoLocation from "expo-location";
import Toast from "react-native-root-toast";

const windowHeight = Dimensions.get("window").height;

const items = [
  { label: "Problem", value: "problem" },
  { label: "Pending", value: "Pending" }, 
  { label: "On Hold", value: "On Hold" },
  { label: "Delivering", value: "Delivering" }, 
];

const accessLocationUseEffect = (
  setLoad,
  accessLocationIsError,
  accessLocationResult,
  accessLocationError,
  setAccessLiveLocation,
  accessLiveLocation,
  navigation
) => {
  return useEffect(() => {
    setLoad(false);
    if (
      accessLocationIsError ||
      (accessLocationResult &&
        (accessLocationResult === 401 || 
          accessLocationResult === 0 ||
          accessLocationResult === 500))
    ) {
      Toast.show("Some Thing went Wrong ", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: (windowHeight * 3) / 4 },
      });
      console.log(accessLocationError);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }

    if (accessLocationResult && accessLocationResult.status === 200) {
      if (accessLocationResult.data.status === 1) {
        Toast.show("Update Done !! ", {
          duration: Toast.durations.LONG,
          containerStyle: { marginBottom: (windowHeight * 3) / 4 },
        });
        setAccessLiveLocation(!accessLiveLocation);
        setLoad(true);
      }
    }
  }, [accessLocationResult, accessLocationIsError]);
};

const resultUseEffect = (
  setLoad,
  result,
  setValue,
  setDate,
  setLocation,
  isError,
  error,
  navigation
) => {
  return useEffect(() => {
    setLoad(false);

    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setValue(result.data.data.status);
        setDate(new Date(result.data.data.arrived_time * 1000));
        setLocation(result.data.data.location);
        setLoad(true);
      }
    }

    if (isError || (result && (result === 401||result===500  ))) {
      Toast.show("Some Thing went Wrong ", {
        duration: Toast.durations.LONG,
      });
      console.log(error);
      setLoad(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  }, [result]);
};

const pickupResultUseEffect = (
  setLoad,
  pickupIsError,
  pickupResult,
  pickupError,
  refetchStatus,
  navigation
) => {
  return useEffect(() => {
    setLoad(false);
    if (
      pickupIsError ||
      (pickupResult &&
        (pickupResult === 401 || 
          pickupResult === 0 ||
          pickupResult === 500))
    ) {
      Toast.show("Some Thing went Wrong ", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: (windowHeight * 3) / 4 },
      });
      console.log(pickupError);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }

    if (pickupResult && pickupResult.status === 200) {
      if (pickupResult.data.status === 1) {
        Toast.show("Update Done !! ", {
          duration: Toast.durations.LONG,
          containerStyle: { marginBottom: (windowHeight * 3) / 4 },
        });
        setLoad(false);
        refetchStatus();
      }
    }
  }, [pickupResult, pickupIsError]);
};

const liveLocationUseEffect = (
  liveLocationIsError,
  liveLocationResult,
  liveLocationError,
  setLiveLocation,
  pickupId,
  setAccessLiveLocation,
  accessLiveLocation,
  navigation
) => {
  return useEffect(() => {
    if (
      liveLocationIsError ||
      (liveLocationResult &&
        (liveLocationResult === 401 || 
          liveLocationResult === 0 ||
          liveLocationResult === 500))
    ) {
      Toast.show("Some Thing went Wrong in set live location", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: (windowHeight * 3) / 4 },
      });
      console.log(liveLocationError);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
    if (
      accessLiveLocation &&
      liveLocationResult &&
      liveLocationResult.status === 200
    ) {
      if (liveLocationResult.data.status === 1) {
        if (liveLocationResult.data.data.live_location) {
          setAccessLiveLocation(liveLocationResult.data.data.live_location);
          setTimeout(() => {
            sendMyLocation(setLiveLocation, pickupId);
          }, 11000);
        }
      }
    }
  }, [liveLocationResult, liveLocationIsError, accessLiveLocation]);
};

const sendMyLocation = async (setLiveLocation, pickupId) => {
  let myCurrentLocation = await getLocation();
  const liveLocationData = new FormData();
  liveLocationData.append("id", pickupId);
  liveLocationData.append("latitude", myCurrentLocation.latitude);
  liveLocationData.append("longitude", myCurrentLocation.longitude);
  setLiveLocation(liveLocationData);
};

const getLocation = async () => {
  let { status } = await geoLocation.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access location was denied");
    return;
  }
  let getLocation = await geoLocation.getCurrentPositionAsync({});
  return {
    latitude: getLocation.coords.latitude,
    longitude: getLocation.coords.longitude,
  };
};

const onSavePress = (
  location,
  setLoad,
  save,
  pickupId,
  date,
  value,
  mutate
) => {
  if (!location) {
    alert("Location is required");
    setLoad(true);
    return;
  }
  if (save) {
    setLoad(false);
    const updateData = new FormData();
    updateData.append("pickup_id", pickupId);
    updateData.append("arrived_time", date.valueOf() / 1000);
    updateData.append("status", value);
    updateData.append("location", location);
    mutate(updateData);
  }
};

const onLocationSubmit = (
  setLoad,
  accessLiveLocation,
  isReceiver,
  refRBSheet,
  pickupId,
  navigation,
  accessLocation,
  setLiveLocation
) => {
  if (accessLiveLocation && isReceiver) {
    setLoad(false);
    refRBSheet.current.close();
    navigation.navigate("Location", { pickupId });
  } else {
    if (!isReceiver) {
      setLoad(false);
      const accessLocationData = new FormData();
      accessLocationData.append("id", pickupId);
      accessLocationData.append("access", !accessLiveLocation ? "1" : "0");
      accessLocation(accessLocationData);
    }
  }
};

export default {
  accessLocationUseEffect,
  resultUseEffect,
  pickupResultUseEffect,
  onSavePress,
  onLocationSubmit,
  items,
  liveLocationUseEffect,
  sendMyLocation,
};
