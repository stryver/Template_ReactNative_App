import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import Home from "../../pages/home";
import Page2 from "../../pages/page2";
const Stack = createStackNavigator();

const navigationOption: StackNavigationOptions = {
  animationEnabled: false,
  title: "",
};
const header = (name: string, back: boolean) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>{name}</Text>
  </View>
);
export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...navigationOption,
            headerLeft: () => header("Home", false),
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            ...navigationOption,
            headerLeft: () => header("Page 2", true),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
