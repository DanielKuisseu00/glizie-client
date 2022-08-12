import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";

const Divider = ({ text, textColor }) => {
  return (
    <View style={styles.dividerWrapper}>
      <View style={[styles.divider, { borderBottomColor: textColor }]}></View>
      <Text style={[styles.dividerText, textColor && { color: textColor }]}>
        {text}
      </Text>
      <View style={[styles.divider, { borderBottomColor: textColor }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dividerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
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
