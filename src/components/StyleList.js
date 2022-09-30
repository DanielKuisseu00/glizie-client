import { StyleSheet, Text, View } from "react-native";
import React from "react";
import List from "./List";

const StyleList = () => {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
};

export default StyleList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  bottomContainer: {},
});
