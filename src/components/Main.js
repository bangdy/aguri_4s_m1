// import { StatusBar } from "expo-status-bar";
import { Divider, ScrollView, VStack } from "native-base";
import React, { useRef, useState } from "react";

import DayBox from "../elements/DayBox";
import Header from "../elements/Header";
import { Task } from "../help/factory";
import TaskWithCarousel from "../elements/TaskWithCarousel";
import Tickle from "../elements/Tickle";
import WeekCarousel from "../elements/WeekCarousel";

export default function Main() {
  const [selectedDay, setSelctedDay] = useState(new Date());
  const [infinityWeekArray, setInfinityWeekArray] = useState([-1, 0, 1]);
  const [prevIndex, setPrevIndex] = useState(1);

  const t1 = new Task("a", "Vitamin");
  const t2 = new Task("b", "Read a book");
  const t3 = new Task("c", "Check parent medicine");
  const tasks = [t1, t2, t3];
  const refs = [];

  return (
    <VStack flex={1} h="100%" bgColor="gray.100" justifyContent="space-between">
      <Header />
      <VStack h="85%" alignItems="center">
        <WeekCarousel
          selectedDay={selectedDay}
          infinityWeekArray={infinityWeekArray}
          setInfinityWeekArray={setInfinityWeekArray}
          prevIndex={prevIndex}
          setPrevIndex={setPrevIndex}
          DayItem={DayBox}
          otherCarousels={refs}
        />
        <Divider mt={2} />
        <ScrollView w="100%">
          {tasks.map((task, i) => {
            const ref = useRef();
            refs.push(ref);
            return (
              <TaskWithCarousel
                key={i}
                forRef={ref}
                enabled={false}
                selectedDay={selectedDay}
                infinityWeekArray={infinityWeekArray}
                setInfinityWeekArray={setInfinityWeekArray}
                prevIndex={prevIndex}
                setPrevIndex={setPrevIndex}
                DayItem={Tickle}
                task={task}
              />
            );
          })}
        </ScrollView>
      </VStack>
    </VStack>
  );
}
