import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CartPriceDetails = () => {
  return (
    <View style={styles.priceDetailsWrapper}>
      <Text style={styles.chooseHowToPayText}>Price Details</Text>

      {/* Price Container */}

      <View style={styles.priceConatiner}>
        <Text style={styles.itemName}>Lace Front Install</Text>
        <Text style={styles.price}>$110.00</Text>
      </View>

      <View style={styles.priceConatiner}>
        <Text style={styles.itemName}>Service fee</Text>
        <Text style={styles.price}>$5.00</Text>
      </View>

      <View style={styles.priceConatiner}>
        <Text style={styles.itemName}>Total</Text>
        <Text style={styles.price}>$115.00</Text>
      </View>

      <View style={styles.priceConatiner}>
        <Text
          style={[
            styles.itemName,
            { fontFamily: "UrbanistBold", fontSize: 17 },
          ]}
        >
          Total to pay now (USD)
        </Text>
        <Text
          style={[styles.price, { fontFamily: "UrbanistBold", fontSize: 17 }]}
        >
          $0.00
        </Text>
      </View>
    </View>
  );
};

export default CartPriceDetails;

const styles = StyleSheet.create({
  priceDetailsWrapper: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  chooseHowToPayText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
  },
  priceConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemName: { fontFamily: "UrbanistRegular", fontSize: 16 },
  price: { fontFamily: "UrbanistRegular", fontSize: 16 },
});
