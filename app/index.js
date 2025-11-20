import React from "react";
import { View, StyleSheet } from "react-native";

import Title from "../components/title/index";
import Main from "../components/Main/index";
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
