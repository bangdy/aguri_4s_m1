// import { StatusBar } from "expo-status-bar";
import { Divider, PresenceTransition, Pressable, ScrollView, VStack, useDisclose } from "native-base";
import React, { useRef, useState } from "react";

import { BlurView } from "@react-native-community/blur";
import DayBox from "../elements/DayBox";
import Header from "../elements/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Task } from "../help/factory";
import TaskWithCarousel from "../elements/TaskWithCarousel";
import Tickle from "../elements/Tickle";
import TickleTypeSelectButton from "../elements/TickleTypeSelectButton";
import WeekCarousel from "../elements/WeekCarousel";
import { trackerArray } from "../constants/naming";

export default function Main() {
  const [selectedDay, setSelctedDay] = useState(new Date());
  const [infinityWeekArray, setInfinityWeekArray] = useState([-1, 0, 1]);
  const [prevIndex, setPrevIndex] = useState(1);

  const t1 = new Task("a", "Vitamin");
  const t2 = new Task("b", "Read a book");
  const t3 = new Task("c", "Check parent medicine");
  const tasks = [t1, t2, t3];
  const refs = [];

  const { isOpen, onToggle, onClose } = useDisclose();

  const btnObj = { borderWidth: 1, borderRadius: 100, borderColor: "gray.300", shadow: 6 };

  return (
    <VStack flex={1} h="100%" bgColor="gray.100" justifyContent="space-between">
      <Header onToggle={onToggle} />
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
      {isOpen && (
        <Pressable onPress={onClose} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <BlurView
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
        </Pressable>
      )}
      <VStack position="absolute" overflow="visible" right={2} top={16}>
        <VStack mr={2} alignItems="flex-end">
          <Pressable onPress={onToggle} alignItems="center" justifyContent="center" {...(isOpen && btnObj)}>
            <Ionicons name={isOpen ? "close" : "add"} size={32} color="black" />
          </Pressable>
        </VStack>
        <VStack justifyContent="flex-start" h={20} opacity={1} mt={2}>
          <PresenceTransition
            visible={isOpen}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 250,
              },
            }}>
            {trackerArray.map((moduleName, i) => (
              <TickleTypeSelectButton moduleName={moduleName} />
            ))}
          </PresenceTransition>
        </VStack>
      </VStack>
    </VStack>
  );
}
