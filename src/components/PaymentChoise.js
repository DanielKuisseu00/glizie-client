import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const PaymentChoise = () => {
  return (
    <View style={styles.payWithSection}>
      <Text style={styles.chooseHowToPayText}>Pay With</Text>
      <View style={styles.cardWrapper}>
        <View style={styles.cardTypeWrapper}>
          <Image
            style={styles.cardTypeImage}
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png",
            }}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.cardNumberTextWrapper}>
          <Entypo name="dots-two-horizontal" size={20} />
          <Entypo
            name="dots-two-horizontal"
            size={20}
            style={{ marginLeft: -4 }}
          />
          <Text style={styles.cardNumberText}> 2427</Text>
        </View>
        <Pressable style={styles.editCardBtn}>
          <Text style={styles.editBtnText}>Edit</Text>
        </Pressable>
      </View>
      <View style={styles.enterCouponWrapper}>
        <Text style={styles.enterCouponText}>Enter Coupon</Text>
      </View>
    </View>
  );
};

export default PaymentChoise;

const styles = StyleSheet.create({
  payWithSection: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  chooseHowToPayText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
  },
  cardWrapper: {
    marginTop: 20,
    flexDirection: "row",
  },
  cardTypeWrapper: {
    borderWidth: 1,
    borderColor: "gray",
    height: 30,
    width: 60,
    flexDirection: "row",
  },
  cardTypeImage: {
    width: "100%",
    height: "100%",
  },
  cardNumberTextWrapper: {
    marginLeft: 24,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    flexDirection: "row",
  },
  cardNumberText: {
    fontFamily: "UrbanistRegular",
    fontSize: 18,
  },
  editCardBtn: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  editBtnText: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  enterCouponWrapper: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  enterCouponText: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
