import { useEffect } from "react";
import { Dimensions } from "react-native";
import * as geoLocation from "expo-location";
import Toast from "react-native-root-toast"; 

const windowHeight = Dimensions.get("window").height;

const items = [
  { label: "Problem", value: "problem" },
  { label: "Not Started", value: "not" },
  { label: "Awaiting Info", value: "awaiting" },
  { label: "Hold", value: "hold" },
  { label: "Picking", value: "picking" },
  { label: "Picked", value: "picked" },
  { label: "On Way", value: "onWay" },
];

const accessLocationUseEffect = (
  setLoad,
  accessLocationIsError,
  accessLocationResult,
  accessLocationError,
  setAccessLiveLocation,
  accessLiveLocation
) => {
  return useEffect(() => {
    setLoad(false);
    if (
      accessLocationIsError ||
      (accessLocationResult &&
        (accessLocationResult === 401 ||
          accessLocationResult === 400 ||
          accessLocationResult === 0 ||
          accessLocationResult === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: (windowHeight * 3) / 4 },
      });
      console.log(accessLocationError);
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
  error
) => {
  return useEffect(() => {
    setLoad(false);

    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setValue(result.data.data.status);
        setDate(new Date(parseInt(result.data.data.arrived_time) * 1000));
        setLocation(result.data.data.location);
        setLoad(true);
      }
    }

    if (isError || (result && (result === 401 || result === 400))) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
      });
      console.log(error);
      setLoad(false);
    }
  }, [result]);
};

const pickupResultUseEffect = (
  setLoad,
  pickupIsError,
  pickupResult,
  pickupError,
  refetchStatus
) => {
  return useEffect(() => {
    setLoad(false);
    if (
      pickupIsError ||
      (pickupResult &&
        (pickupResult === 401 ||
          pickupResult === 400 ||
          pickupResult === 0 ||
          pickupResult === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
        containerStyle: { marginBottom: (windowHeight * 3) / 4 },
      });
      console.log(pickupError);
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
  sendMyLocation,
};
