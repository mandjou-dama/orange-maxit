import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText as View } from "@/components/ThemedText";
import { ThemedView as Text } from "@/components/ThemedView";

interface Props {
  // Add your navigation or route props here if needed
}

const Sugu = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>sugu Screen</Text>
      </View>
    </SafeAreaView>
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
