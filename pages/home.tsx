import React from "react";
import { Alert, ScrollView, Text } from "react-native";
import { StyledButton } from "../components/buttons";
import { Theme } from "../style";
import State from "../components/GlobalState";
import { StackNavigationProp } from "@react-navigation/stack/src/types";
import { ParamListBase } from "@react-navigation/native";

const Home = (props: any) => {
  State.write<StackNavigationProp<ParamListBase>>(
    "navigator",
    props.navigation
  );

  return (
    <ScrollView style={Theme.views.StyledScrollView}>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        Home
      </Text>
      <StyledButton
        onPress={() => props.navigation.navigate("Page2")}
        title={"Page 2"}
      />
    </ScrollView>
  );
};

export default Home;
