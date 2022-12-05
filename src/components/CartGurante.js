import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CartGurante = () => {
  return (
    <View style={styles.guranteeWrapper}>
      <Text style={styles.guranteeText}>Your Booking is protected with</Text>
      <Text
        style={[styles.guranteeTextBold, { color: "#ef233c", marginLeft: 7 }]}
      >
        Grizlie
      </Text>
      <Text style={styles.guranteeTextBold}>Cover</Text>
    </View>
  );
};

export default CartGurante;

const styles = StyleSheet.create({
  guranteeWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
  },
  guranteeText: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
  },
  guranteeTextBold: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    marginleft: 20,
  },
});
