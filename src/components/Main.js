import React, { useRef, useState } from "react";

import DaySelectorCarousel from "../elements/DaySelectorCarousel";
import Footer from "../elements/Footer";
import Header from "../elements/Header";
// import { StatusBar } from "expo-status-bar";
import { VStack } from "native-base";

export default function Main() {
  const ref = useRef(null);
  const [selectedDay, setSelctedDay] = useState(new Date());

  return (
    <VStack flex={1} h="100%" bgColor="gray.100" justifyContent="space-between">
      <Header />
      <VStack h="80%">
        <DaySelectorCarousel forRef={ref} selectedDay={selectedDay} />
        {/* <Button
          colorScheme="primary"
          onPress={() => {
            console.log("hello");
            ref.current.next();
          }}>
          Move(+)
        </Button> */}
      </VStack>
      <Footer />
    </VStack>
  );
}
