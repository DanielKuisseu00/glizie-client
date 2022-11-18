import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../data/colors";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomSheetBanner = ({ stylist }) => {
  return (
    <View style={styles.bannerWrapper}>
      <View style={styles.avatarWrapper}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={{ uri: stylist.avatar }}
        />
      </View>
      <View style={[styles.detailWrapper]}>
        <Text style={styles.name}>{stylist.name}</Text>
        <View style={[styles.bioWrapper]}>
          <View style={styles.top}>
            <View style={styles.ratingWrapper}>
              <AntDesign name="star" size={20} color={COLORS.ruby} />
              <Text style={styles.rating}>{stylist.rating}</Text>
            </View>
            <View style={styles.reviewWrapper}>
              <Text style={styles.reviews}>
                {stylist?.reviews?.length} reviews
              </Text>
            </View>
            <View style={styles.topStylistWrapper}>
              <MaterialCommunityIcons
                name="medal"
                size={20}
                color={COLORS.ruby}
              />
              <Text style={styles.rating}>Top stylist</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.location}>{stylist.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomSheetBanner;

const styles = StyleSheet.create({
  bannerWrapper: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
  },
  avatarWrapper: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  detailWrapper: { flex: 1, justifyContent: "center" },
  name: {
    fontFamily: "UrbanistBold",
    fontSize: 25,
    color: COLORS.ruby,
  },
  bioWrapper: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontFamily: "UrbanistSemiBold",
    marginLeft: 5,
    fontSize: 15,
  },
  reviewWrapper: {
    marginLeft: 10,
  },
  reviews: {
    textDecorationLine: "underline",
    fontFamily: "UrbanistBold",
    fontSize: 15,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topStylistWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  rating: {
    fontFamily: "UrbanistSemiBold",
    marginLeft: 5,
    fontSize: 15,
  },
  reviewWrapper: {
    marginLeft: 10,
  },
  reviews: {
    textDecorationLine: "underline",
    fontFamily: "UrbanistBold",
    fontSize: 15,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topStylistWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  location: {
    fontFamily: "UrbanistMedium",
    fontSize: 15,
  },
});
