import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import CartCard from "../components/CartCard";
import { COLORS } from "../data/colors";

const AppointmentCartScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const handleNavBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ backgroundColor: "#ffffff" }}>
        <TopBar handleNavBack={handleNavBack} topBarText={"Book Appointment"} />
        {/* <Text style={styles.title}>My Cart</Text> */}
        <View style={styles.disclaimerWrapper}>
          <Text style={styles.disclaimerText}>
            Don't worry you wont be charged untill your appointment is fully
            completed.
          </Text>
        </View>

        <View style={styles.cartItemContainer}>
          <CartCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentCartScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  title: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    marginTop: 24,
    marginLeft: 20,
  },
  cartItemContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  cardItem: {
    width: "100%",
    height: 140,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
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
  },
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
