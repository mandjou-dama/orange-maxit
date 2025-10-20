// components/GlobalBlurOverlay.tsx
import { useDrawerProgress } from "@react-navigation/drawer";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedReaction,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const BLUR_INTENSITY = 80;

export const GlobalBlurOverlay = () => {
  const intensity = useSharedValue<number | undefined>(0);
  const drawerProgress = useDrawerProgress();

  useAnimatedReaction(
    () => drawerProgress.value,
    (progress) => {
      intensity.value = progress * BLUR_INTENSITY;
    }
  );

  return (
    <AnimatedBlurView
      style={StyleSheet.absoluteFill}
      pointerEvents="none"
      intensity={intensity}
    />
  );
};
