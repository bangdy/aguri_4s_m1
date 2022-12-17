import { Box, Button, Divider, HStack, Input, VStack } from "native-base";
import React, { useState } from "react";

import { DAY_WIDTH_IN_WEEK } from "../constants/layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Task } from "../help/factory";
import { setItemToAsync } from "../help/util";

export default function TaskCreator(props) {
  const [title, setTitle] = useState(null);
  const [detail, setDetail] = useState(null);

  const task = new Task({ title, detail });

  const taskCollector = props.route.params;

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
              const result = await setItemToAsync("myRoutine", [...taskCollector, task]);
              if (result) {
                props.navigation.goBack();
              }
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
