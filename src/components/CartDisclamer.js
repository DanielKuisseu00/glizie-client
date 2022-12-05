import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../data/colors";

const CartDisclamer = () => {
  return (
    <View style={styles.disclaimerWrapper}>
      <Text style={styles.disclaimerText}>
        Don't worry you wont be charged untill your appointment is fully
        completed.
      </Text>
    </View>
  );
};

export default CartDisclamer;

const styles = StyleSheet.create({
  disclaimerWrapper: {
    backgroundColor: COLORS.ruby,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  disclaimerText: {
    fontFamily: "UrbanistSemiBold",
    color: "white",
    fontSize: 18,
  },
});
