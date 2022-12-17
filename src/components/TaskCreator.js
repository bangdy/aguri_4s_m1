import { Box, Button, Divider, HStack, Input, VStack, useDisclose } from "native-base";
import React, { useEffect, useState } from "react";

import { DAY_WIDTH_IN_WEEK } from "../constants/layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Task } from "../help/factory";
import { setItemToAsync } from "../help/util";
import { useIsFocused } from "@react-navigation/core";

export default function TaskCreator(props) {
  const [title, setTitle] = useState(null);
  const [detail, setDetail] = useState(null);
  const isFocused = useIsFocused();

  const task = new Task({ title, detail });

  const params = props.route.params;
  const currentIsForUpdate = params?.task;

  useEffect(() => {
    if (currentIsForUpdate) {
      setTitle(params.task.title);
      setDetail(params.task.detail);
    }
  }, [isFocused]);

  return (
    <VStack flex={1} h="100%" justifyContent="flex-start" alignItems="center">
      <HStack w="80%" justifyContent="space-between" mt={10}>
        <Button
          colorScheme="gray"
          variant="ghost"
          onPress={() => {
            props.navigation.goBack();
          }}>
          Cancel
        </Button>
        <Button
          colorScheme="black"
          variant="ghost"
          onPress={async () => {
            if (title && detail) {
              if (!currentIsForUpdate) {
                // task 를 신규로 생성하는 경우
                await setItemToAsync("myRoutine", [...params.taskCollector, task]);
              } else {
                // task 이름을 바꾸는 겨우
                const temp = [...params.taskCollector];
                temp[params.index] = task;
                await setItemToAsync("myRoutine", temp);
              }
              props.navigation.goBack();
            }
          }}>
          Create
        </Button>
      </HStack>
      <VStack w="100%" justifyContent="center" alignItems="center" mt={8}>
        <HStack w="100%">
          <VStack w="20%"></VStack>
          <Input
            w="80%"
            variant="unstyled"
            placeholder="Untitled"
            size="2xl"
            fontSize={32}
            value={title}
            onChangeText={(t) => setTitle(t)}
          />
        </HStack>

        <Divider w="100%" my={4} />
        <HStack w="100%">
          <Box w="20%" justifyContent="center" alignItems="center">
            <Ionicons name={"menu"} size={32} color="black" />
          </Box>
          <Input
            w="80%"
            variant="unstyled"
            placeholder="Add details"
            size="2xl"
            fontSize={24}
            value={detail}
            onChangeText={(t) => setDetail(t)}
          />
        </HStack>

        <Divider w="100%" my={4} />
        <HStack w="100%">
          <Box w="20%" justifyContent="center" alignItems="center">
            <Ionicons name="checkmark-circle-outline" size={32} color="black" />
          </Box>
          <VStack ml={2}>
            <Box
              w={DAY_WIDTH_IN_WEEK * 0.8}
              h={DAY_WIDTH_IN_WEEK * 0.8}
              py={2}
              borderRadius={DAY_WIDTH_IN_WEEK}
              backgroundColor="green.400"
              borderColor="gray.300"
              borderWidth={0.5}
              justifyContent="center"
              alignItems="center"></Box>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
