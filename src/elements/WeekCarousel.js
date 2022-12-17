import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import React from "react";
import WeekContainer from "./WeekContainer";
import dayjs from "dayjs";
import { infinityWeekCallback } from "../help/util";

const PAGE_WIDTH = Dimensions.get("window").width;

export default function WeekCarousel(props) {
  const today = new Date();
  const startSunday = dayjs(today).add(-dayjs(today).day(), "day");
  const {
    forwardedRef,
    selectedDay,
    infinityWeekArray,
    setInfinityWeekArray,
    prevIndex,
    setPrevIndex,
    DayItem,
    otherCarousels,
    task,
    index,
  } = props;

  return (
    <Carousel
      {...props}
      loop
      ref={(el) => {
        // 실제 task 만 ref Array 에 넣기 위함
        if (forwardedRef && !forwardedRef.current?.[index]) {
          forwardedRef.current = [...forwardedRef.current, el];
        }
      }}
      style={{ width: "100%" }}
      data={infinityWeekArray.map((value) => dayjs(startSunday).add(value, "week"))}
      onProgressChange={(offsetProgress, absoluteProgress) => {}}
      height={90}
      width={PAGE_WIDTH}
      defaultIndex={1}
      scrollAnimationDuration={200}
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
            //animation 효과를 줘야 할 때 쓰자
          }
          otherCarousels.current.forEach((obj) => obj.scrollTo({ index: currentIndex }));
        }
      }}
      renderItem={({ item }) => {
        return <WeekContainer DayItem={DayItem} date={item} selectedDay={selectedDay} task={task} />;
      }}
    />
  );
}
