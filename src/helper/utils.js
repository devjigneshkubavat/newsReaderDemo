import { Dimensions, Platform } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RFValue } from "react-native-responsive-fontsize";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export const wp = (val) => widthPercentageToDP(val);

export const hp = (val) => heightPercentageToDP(val);

export const statusBarHeight = getStatusBarHeight();

export const fontSize = (val) => RFValue(val, 812);

export const isIos = Platform.OS === "ios";

export const hp1 = (val) => heightPercentageToDP((val * 100) / height);
export const wp1 = (val) => widthPercentageToDP((val * 100) / width);

export const getSecondsBasedOnTimeString = (time) => {
  if (!time) return 0;
  const timeArray = time.split(":");
  let timeInSeconds = 0;
  if (timeArray?.length === 3) {
    timeInSeconds =
      parseInt(timeArray[0], 10) * 24 * 60 +
      parseInt(timeArray[1], 10) * 60 +
      parseInt(timeArray[2], 10);
  } else if (timeArray?.length === 2) {
    timeInSeconds =
      parseInt(timeArray[0], 10) * 60 + parseInt(timeArray[1], 10);
  }
  return timeInSeconds;
};

export const getDifferenceInSeconds = (endTime, startTime) => {
  if (!endTime || !startTime) {
    return 20;
  }

  const endTimeInSeconds = getSecondsBasedOnTimeString(endTime);
  const startTimeInSeconds = getSecondsBasedOnTimeString(startTime);

  const diffInSeconds = endTimeInSeconds - startTimeInSeconds;
  return diffInSeconds > 0 ? diffInSeconds : 20;
};
