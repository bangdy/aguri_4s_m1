import { Divider, FlatList, HStack, View } from "native-base";
import React, { useState } from "react";

import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import WeekContainer from "./WeekContainer";
import dayjs from "dayjs";
import { infinityWeekCallback } from "../help/util";

const PAGE_WIDTH = Dimensions.get("window").width;

export default function WeekCarousel(props) {
  const today = new Date();
  const startSunday = dayjs(today).add(-dayjs(today).day(), "day");
  const {
    forRef,
    selectedDay,
    infinityWeekArray,
    setInfinityWeekArray,
    prevIndex,
    setPrevIndex,
    DayItem,
    otherCarousels,
    task,
  } = props;

  return (
    <Carousel
      {...props}
      loop
      ref={forRef}
      style={{ width: "100%" }}
      data={infinityWeekArray.map((value) => dayjs(startSunday).add(value, "week"))}
      onProgressChange={(offsetProgress, absoluteProgress) => {}}
      height={90}
      width={PAGE_WIDTH}
      defaultIndex={1}
      onSnapToItem={(currentIndex) => {
        const isMinusDirection = infinityWeekCallback({
          currentIndex,
          prevIndex,
          setPrevIndex,
          infinityWeekArray,
          setInfinityWeekArray,
        });
        if (otherCarousels) {
          if (isMinusDirection) {
            otherCarousels.forEach((obj) => obj.current.prev());
          } else {
            otherCarousels.forEach((obj) => obj.current.next());
          }
        }
      }}
      renderItem={({ item }) => {
        return <WeekContainer DayItem={DayItem} date={item} selectedDay={selectedDay} task={task} />;
      }}
    />
  );
}
