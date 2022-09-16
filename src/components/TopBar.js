import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../data/colors";

const TopBar = ({
  handleNavBack,
  topBarText,
  iconColor,
  backgroundColor,
  isAbsolute,
  cart,
}) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.topBar,
        {
          backgroundColor: backgroundColor,
          position: isAbsolute ? "absolute" : "static",
          justifyContent: cart ? "space-between" : "flex-start",
        },
      ]}
    >
      <Pressable onPress={handleNavBack} style={styles.backIconWrapper}>
        <Icon name={"arrow-back"} size={30} color={iconColor} />
      </Pressable>
      <Text style={styles.topBarText}>{topBarText}</Text>
      {cart ? (
        <View style={styles.cartContainer}>
          <View style={styles.iconContainer}>
            <Icon name="cart" size={20} color="white" />
          </View>
          <View style={styles.cartAmountContainer}>
            <Text style={styles.cartAmountText}>1</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    width: Dimensions.get("window").width,
    marginBottom: 0,
    paddingHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  backIconWrapper: {
    width: 28,
    height: 28,
    marginRight: 24,
  },
  topBarText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
  },
  cartContainer: {
    backgroundColor: COLORS.ruby,
    paddingHorizontal: 24,
    height: 50,
    width: 100,
    borderRadius: 10,
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cartAmountContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cartAmountText: {
    color: "white",
  },
});

export default TopBar;
