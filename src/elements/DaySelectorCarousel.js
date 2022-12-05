import { Divider, FlatList, HStack, View } from "native-base";
import React, { useState } from "react";

import Carousel from "react-native-reanimated-carousel";
import DaySelector from "./DaySelector";
import { Dimensions } from "react-native";
import dayjs from "dayjs";

const PAGE_WIDTH = Dimensions.get("window").width;

export default function WeekScroll() {
  const [prevIndex, setPrevIndex] = useState(1);
  const [infinityWeekArray, setInfinityWeekArray] = useState([-1, 0, 1]);
  const arrLength = infinityWeekArray.length;
  const today = new Date();
  const startSunday = dayjs(today).add(-dayjs(today).day(), "day");

  return (
    <>
      <Carousel
        loop
        style={{ width: "100%" }}
        data={infinityWeekArray.map((value) => dayjs(startSunday).add(value, "week"))}
        onProgressChange={(offsetProgress, absoluteProgress) => {
          // console.log("🚀 ~ file: DaySelectorCarousel.js:49 ~ WeekScroll ~ offsetProgress", absoluteProgress);
        }}
        height={80}
        width={PAGE_WIDTH}
        defaultIndex={1}
        onSnapToItem={(currentIndex) => {
          const diff = currentIndex - prevIndex;
          const tempArr = [...infinityWeekArray];
          if ([2, -1].includes(diff)) {
            // - direction
            tempArr[(currentIndex - 1 + arrLength) % arrLength] = tempArr[currentIndex] - 1;
          } else {
            // + direction
            tempArr[(currentIndex + 1) % arrLength] = tempArr[currentIndex] + 1;
          }
          setPrevIndex(currentIndex);
          setInfinityWeekArray(tempArr);
        }}
        renderItem={({ item }) => {
          return <DaySelector date={item} />;
        }}
      />
      <Divider mt={2} />
    </>
  );
}
