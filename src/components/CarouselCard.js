import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";

const CarouselCard = ({ item }) => {
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
    <View style={styles.promoCard}>
      <View style={styles.darkOverlay}>
        <View style={[styles.left, { backgroundColor: item.cardColor }]}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          <View style={styles.bookBtn}>
            <Text style={styles.bookBtnText}>Book Appointment</Text>
            <Icon name="arrow-right" size={12} color="black" />
          </View>
        </View>
        <View style={styles.right}>
          <Image
            style={styles.cardImage}
            source={{
              uri: item.cardImage,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  promoCard: {
    width: 300,
    height: 130,
    backgroundColor: "teal",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 24,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(8, 8, 8, 0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    backgroundColor: "#e63946",
    paddingLeft: 10,
    paddingTop: 10,
  },
  cardTitle: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 15,
    marginBottom: 10,
  },
  cardSubtitle: {
    color: "white",
    fontFamily: "UrbanistSemiBold",
    fontSize: 13,
    marginBottom: 18,
  },
  bookBtn: {
    backgroundColor: "white",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
    padding: 5,
  },
  bookBtnText: {
    marginRight: 10,
    fontSize: 13,
    fontFamily: "UrbanistSemiBold",
  },
  right: {
    flex: 0.7,
    backgroundColor: "blue",
  },
});
