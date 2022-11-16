import { useEffect } from "react";
import Toast from "react-native-root-toast";

const addPickupResultUseEffect = (
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
      });
      console.log(pickupError);
    }
  }, [pickupResult, pickupIsError]);
};
