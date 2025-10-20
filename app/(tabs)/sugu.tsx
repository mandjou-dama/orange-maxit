import React from "react";
import { StyleSheet } from "react-native";

import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";

interface Props {
  // Add your navigation or route props here if needed
}

const Sugu = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>sugu Screen</Text>
      </View>
    </View>
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

export default Sugu;
