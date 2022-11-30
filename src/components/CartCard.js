import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../data/colors";

const CartCard = () => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.cardItem}>
      <View style={styles.cardImageWrapper}>
        <Image
          style={styles.cardImage}
          resizeMode="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          }}
        />
      </View>
      <View style={styles.cardDetailsWrapper}>
        <Text style={styles.itemTitle}>Lace Front Install</Text>
        <Text style={styles.itemDetails}>$120.00</Text>
        <View style={styles.stylistDetailWraper}>
          <View style={styles.ratingWrapper}>
            <AntDesign name="star" size={20} color={COLORS.ruby} />
            <Text style={styles.ratingText}>5.00</Text>
            <Text style={styles.reviewText}>(3)</Text>
          </View>
          <View style={styles.proWrapper}>
            <Text style={styles.proText}>Pro Stylist</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cardItem: {
    width: "100%",
    height: 140,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  cardImageWrapper: {
    flex: 0.6,
    backgroundColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardDetailsWrapper: {
    flex: 1,
    paddingLeft: 20,
    backgroundColor: "#ffffff",
  },
  itemTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    marginBottom: 7,
  },
  itemDetails: {
    fontFamily: "UrbanistRegular",
    fontSize: 15,
    color: "gray",
  },
  stylistDetailWraper: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 20,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
  },
  reviewText: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
    color: "#7f8282",
    marginLeft: 7,
  },
  proWrapper: {
    backgroundColor: COLORS.ruby,
    width: 100,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  proText: {
    fontFamily: "UrbanistBold",
    color: "white",
    fontSize: 15,
  },
});
