import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartCard from "./CartCard";

const AppointmentCard = () => {
  return (
    <View style={styles.cartItemContainer}>
      <CartCard />
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  cartItemContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
