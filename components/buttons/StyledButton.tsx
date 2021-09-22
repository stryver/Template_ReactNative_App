import React from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Theme } from "../../style";

interface Props {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  title: string;
  disable?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const StyledButton = ({
  onPress,
  title,
  disable,
  buttonStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={disable ? undefined : onPress}
      style={[Theme.button.classicButton, buttonStyle]}
    >
      <Text style={Theme.button.textClassic}>{title}</Text>
    </TouchableOpacity>
  );
};
