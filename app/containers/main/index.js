import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

import Header from "../../components/header";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1
  }
});

const Main = () => (
  <SafeAreaView style={styles.container}>
    <Header title={"Main"} />
    <View style={styles.main}>
      <Text>Main Screen</Text>
    </View>
  </SafeAreaView>
);

export default Main;
