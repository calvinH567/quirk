import React from "react";
import theme from "./theme";
import { Dimensions, TextInput as ReactNativeTextInput } from "react-native";

export const textInputStyle = {
  height: Dimensions.get("screen").height * 0.15,
  backgroundColor: "white",
  padding: 12,
  paddingTop: 14,
  borderRadius: 8,
  fontSize: 16,
  borderColor: theme.red,
  borderWidth: 1,
  borderBottomWidth: 2,
  color: theme.blue,
  textAlignVertical: "top",
};
export const textInputPlaceholderColor = theme.veryLightText;

export const TextInput = (props: {
  placeholder: string;
  multiline?: boolean;
  numberOfLines?: number;
  onChangeText: (txt: string) => void;
  onBlur?: () => void;
  value: string;
}) => (
  <ReactNativeTextInput
    style={textInputStyle}
    placeholderTextColor={textInputPlaceholderColor}
    {...props}
  />
);
