import { View } from "@/components/Themed";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  // Add your navigation or route props here if needed
}

const OrangeMoney = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>OrangeMoney Screen</Text>
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

export default OrangeMoney;
