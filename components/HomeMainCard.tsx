import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText as Text } from "./ThemedText";

const HomeMainCard = () => {
  return (
    <View style={styles.container}>
      <Text>HomeMainCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default HomeMainCard;
