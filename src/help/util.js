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
