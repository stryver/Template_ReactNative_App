import React from "react";
import { ScrollView, Text } from "react-native";
import { Theme } from "../style";
import { StyledButton } from "../components/buttons";

const Page2 = () => {
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
        Page 2
      </Text>
    </ScrollView>
  );
};

export default Page2;
