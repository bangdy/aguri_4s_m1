import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
export const infinityWeekCallback = ({
  currentIndex,
  prevIndex,
  setPrevIndex,
  infinityWeekArray,
  setInfinityWeekArray,
}) => {
  const arrLength = infinityWeekArray.length;
  const diff = currentIndex - prevIndex;
  const tempArr = [...infinityWeekArray];
  const isMinusDirection = [2, -1].includes(diff);
  if (isMinusDirection) {
    // - direction
    tempArr[(currentIndex - 1 + arrLength) % arrLength] = tempArr[currentIndex] - 1;
  } else {
    // + direction
    tempArr[(currentIndex + 1) % arrLength] = tempArr[currentIndex] + 1;
  }
  setPrevIndex(currentIndex);
  setInfinityWeekArray(tempArr);

  return isMinusDirection;
};

export const dateIdGenerator = (date) => dayjs(new Date(date)).format("YYYY.MM.DD");

const isEmpty = function (value) {
  if (
    value === "" ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === "object" && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};

export const getItemFromAsync = (storageName) => {
  if (isEmpty(storageName)) {
    throw Error("Storage Name is empty");
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result === null) {
        resolve(null);
      }

      resolve(JSON.parse(result));
    });
  });
};

// AsyncStorage set 함수 모듈
export const setItemToAsync = (storageName, item) => {
  if (isEmpty(storageName)) {
    throw Error("Storage Name is empty");
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }

      resolve("입력 성공");
    });
  });
};
