import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface Props {
  // Add your navigation or route props here if needed
}

const Sarali = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>sarali Screen</Text>
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

export default Sarali;
