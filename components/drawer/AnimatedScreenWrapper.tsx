// components/AnimatedScreenWrapper.tsx
import { useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import { useWindowDimensions } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { GlobalBlurOverlay } from "./GlobalBlurOverlay";

export const AnimatedScreenWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const drawerProgress = useDrawerProgress();
  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: drawerProgress.value * (width / 3),
      },
    ],
  }));

  return (
    <>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        {children}
      </Animated.View>
      <GlobalBlurOverlay />
    </>
  );
};
