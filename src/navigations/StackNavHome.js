import Main from "../components/Main";
import React from "react";
import TaskCreator from "../components/TaskCreator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "native-base";

const Stack = createNativeStackNavigator();

export default function StackNavRoot(props) {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        // headerMode: themeType === 'dark' ? 'screen' : 'float',
        headerStyle: {
          backgroundColor: theme.colors.coolGray[400],
        },
        headerTitleStyle: { color: theme.colors.primary[400] },
        headerTintColor: theme.colors.primary[400],
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="TaskCreator" component={TaskCreator} options={{ presentation: "modal" }} />
    </Stack.Navigator>
  );
}
