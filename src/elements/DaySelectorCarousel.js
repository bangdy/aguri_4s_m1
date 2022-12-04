import { Divider, FlatList, HStack, View } from "native-base";
import React, { useState } from "react";

import Carousel from "react-native-reanimated-carousel";
import DaySelector from "./DaySelector";
import { Dimensions } from "react-native";
import dayjs from "dayjs";

const PAGE_WIDTH = Dimensions.get("window").width;

export default function WeekScroll() {
  const today = new Date();
  // const [selectedWeekSunday, setSelectedWeekSunday] = useState(dayjs(today).add(dayjs(today).day(), "day"));
  //Carousel 할 때, 양쪽으로 week 을 추가해주는 개수
  const numberOfWeeks = 20;
  const startSunday = dayjs(today).add(dayjs(today).day(), "day");
  const weeks = [
    ...Array(numberOfWeeks)
      .fill(0)
      .map((_, i) => dayjs(startSunday).add(-i - 1, "week"))
      .reverse(),
    dayjs(startSunday),
    ...Array(numberOfWeeks)
      .fill(0)
      .map((_, i) => dayjs(startSunday).add(i + 1, "week")),
  ];

  return (
    <>
      <Carousel
        loop
        style={{ width: "100%" }}
        data={weeks}
        height={80}
        width={PAGE_WIDTH}
        defaultIndex={numberOfWeeks}
        onSnapToItem={(index) => {}}
        renderItem={({ item }) => {
          return <DaySelector date={item} />;
        }}
      />
      <Divider mt={2} />
    </>
  );
}
