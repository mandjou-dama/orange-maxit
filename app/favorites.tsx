import { AnimatedScreenWrapper } from "@/components/drawer/AnimatedScreenWrapper";
import React from "react";
import { StyleSheet } from "react-native";

import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";

interface Props {
  // Add your navigation or route props here if needed
}

const Favorites = ({}: Props) => {
  return (
    <AnimatedScreenWrapper>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Text>socials Screen</Text>
        </View>
      </View>
    </AnimatedScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Favorites;
