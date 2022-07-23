import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Divider = () => {
  return (
    <View style={styles.dividerWrapper}>
      <View style={styles.divider}></View>
      <Text style={styles.dividerText}>or</Text>
      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dividerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(115, 115, 115, 0.5)",
  },
  dividerText: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default Divider;
