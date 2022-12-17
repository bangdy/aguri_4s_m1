// import { StatusBar } from "expo-status-bar";
import { Button, Divider, PresenceTransition, Pressable, ScrollView, VStack, useDisclose } from "native-base";
import React, { useEffect, useRef, useState } from "react";

import { BlurView } from "@react-native-community/blur";
import DayBox from "../elements/DayBox";
import Header from "../elements/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Task } from "../help/factory";
import TaskWithCarousel from "../elements/TaskWithCarousel";
import Tickle from "../elements/Tickle";
import TickleTypeSelectButton from "../elements/TickleTypeSelectButton";
import WeekCarousel from "../elements/WeekCarousel";
import { getItemFromAsync } from "../help/util";
import { trackerArray } from "../constants/naming";

export default function Main(props) {
  const [selectedDay, setSelctedDay] = useState(new Date());
  const [infinityWeekArray, setInfinityWeekArray] = useState([-1, 0, 1]);
  const [prevIndex, setPrevIndex] = useState(1);

  const [taskCollector, setTaskCollector] = useState([]);
  const refs = useRef([]);
  console.log("🚀 ~ file: Main.js:24 ~ Main ~ refs", refs);

  const { isOpen, onToggle, onClose } = useDisclose();

  const additionalStyles = { borderWidth: 1, borderRadius: 100, borderColor: "gray.300", shadow: 6 };

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await getItemFromAsync("myRoutine");
      setTaskCollector(result);
    };
    fetchTasks();
  }, []);

  return (
    <VStack flex={1} h="100%" bgColor="gray.100" justifyContent="space-between">
      <Header onToggle={onToggle} />
      <Button
        colorScheme="primary"
        onPress={() => {
          console.log(refs);
        }}>
        Primary
      </Button>
      <VStack h="85%" alignItems="center">
        <WeekCarousel
          selectedDay={selectedDay}
          infinityWeekArray={infinityWeekArray}
          setInfinityWeekArray={setInfinityWeekArray}
          prevIndex={prevIndex}
          setPrevIndex={setPrevIndex}
          DayItem={DayBox}
          otherCarousels={refs} // ref를 통해 함수를 사용하기 위함
        />
        <Divider mt={2} />
        <ScrollView w="100%">
          {taskCollector.map((task, i) => {
            return (
              <TaskWithCarousel
                key={i}
                forwardedRef={refs} // 실제 task 만 ref Array 에 넣기 위한 식별자 1
                index={i} // 실제 task 만 ref Array 에 넣기 위한 식별자 2
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
          <Pressable onPress={onToggle} alignItems="center" justifyContent="center" {...(isOpen && additionalStyles)}>
            <Ionicons name={isOpen ? "close" : "add"} size={32} color="black" />
          </Pressable>
        </VStack>
        {isOpen && (
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
                <TickleTypeSelectButton moduleName={moduleName} key={i} taskCollector={taskCollector} {...props} />
              ))}
            </PresenceTransition>
          </VStack>
        )}
      </VStack>
    </VStack>
  );
}
