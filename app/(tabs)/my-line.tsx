import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";

interface Props {
  // Add your navigation or route props here if needed
}

const MyLine = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>my-line Screen</Text>
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

export default MyLine;
