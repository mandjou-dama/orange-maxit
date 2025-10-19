import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { cloneElement, ReactElement } from "react";
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "bold"
    | "regular";
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export function ThemedText({
  style,
  type = "default",
  colorName = "text",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(colorName);
  const variantKey = type as keyof typeof styles;

  return (
    <Text
      style={[{ color, fontFamily: "InterMedium" }, styles[variantKey], style]}
      {...rest}
    />
  );
}

export function ThemedTextWrapper({
  children,
  type = "default",
  colorName = "text",
  style,
  ignoreStyle = true,
  ...rest
}: ThemedTextProps & { children: ReactElement<any>; ignoreStyle?: boolean }) {
  const color = useThemeColor(colorName);
  const variantKey = type as keyof typeof styles;

  const combinedStyle = [
    { color, fontFamily: "InterMedium" },
    !ignoreStyle && styles[variantKey],
    style,
  ];

  return cloneElement(children, {
    style: [(children.props as any).style ?? {}, ...combinedStyle],
    ...rest,
  });
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  defaultSemiBold: {
    fontSize: 17,
    fontFamily: "InterSemiBold",
  },
  title: {
    fontFamily: "InterSemiBold",
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  bold: {
    fontSize: 16,
    fontFamily: "InterBold",
  },
  regular: {
    fontSize: 16,
    fontFamily: "InterRegular",
  },
});
