import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import CartCard from "../components/CartCard";
import { COLORS } from "../data/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

const AppointmentCartScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
    UrbanistBlack: require("../../assets/fonts/urbanist/Urbanist-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const handleNavBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.pop();
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={{ backgroundColor: "#ffffff", paddingBottom: 50 }}>
        {/* Top Bar component */}

        <TopBar
          handleNavBack={handleNavBack}
          topBarText={"Reserve Appointment"}
        />

        {/* Disclamer Wrapper for discalmer */}

        <View style={styles.disclaimerWrapper}>
          <Text style={styles.disclaimerText}>
            Don't worry you wont be charged untill your appointment is fully
            completed.
          </Text>
        </View>

        {/* Cart Wrapper for cart items */}

        <View style={styles.cartItemContainer}>
          <CartCard />
        </View>

        {/* Gurantee Wrapper  */}

        <View style={styles.guranteeWrapper}>
          <Text style={styles.guranteeText}>
            Your Booking is protected with
          </Text>
          <Text
            style={[
              styles.guranteeTextBold,
              { color: "#ef233c", marginLeft: 7 },
            ]}
          >
            Grizlie
          </Text>
          <Text style={styles.guranteeTextBold}>Cover</Text>
        </View>

        {/* Choose how to pay wrapper */}

        <View style={styles.chooseHowToPayWrapper}>
          <Text style={styles.chooseHowToPayText}>Choose how to pay</Text>

          {/* Pay all at once option card */}

          <View style={styles.payChoiceWrapper}>
            <View style={styles.choiceLeftWrapper}>
              <Text style={styles.choiceTitle}>
                Pay in full when appointment is complete.
              </Text>
            </View>
            <View style={styles.choiceRightWrapper}>
              <MaterialIcons name="radio-button-on" size={30} />
            </View>
          </View>

          {/* Pay part now and part later */}

          <View style={styles.payChoiceWrapper}>
            <View style={styles.choiceLeftWrapper}>
              <View style={styles.leftChoiceWrapper}>
                <Text style={styles.choiceTitle}>
                  Or 4 interest free payments of $27.50 with{" "}
                  <Text style={styles.klarnaText}>Klarna.</Text>
                </Text>
              </View>
            </View>
            <View style={styles.choiceRightWrapper}>
              <MaterialIcons name="radio-button-off" size={30} />
            </View>
          </View>
        </View>

        {/* Price Details Wrapper */}

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
            <Text
              style={[
                styles.itemName,
                { fontFamily: "UrbanistBold", fontSize: 17 },
              ]}
            >
              Total (USD)
            </Text>
            <Text
              style={[
                styles.price,
                { fontFamily: "UrbanistBold", fontSize: 17 },
              ]}
            >
              $115.00
            </Text>
          </View>
        </View>

        {/* Payment Choice section */}

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
              {/* <Entypo name="dots-two-horizontal" size={20} />
                <Entypo name="dots-two-horizontal" size={20} /> */}
              <Text style={styles.cardNumberText}> 2427</Text>
            </View>
            <Pressable style={styles.editCardBtn}>
              <Text style={styles.editBtnText}>Edit</Text>
            </Pressable>
          </View>
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
    // paddingBottom: Platform.OS === "android" ? 20 : 0,
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
  chooseHowToPayWrapper: {
    padding: 24,
  },
  chooseHowToPayText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
  },
  payChoiceWrapper: {
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  choiceLeftWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  choiceTitle: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
  },
  choiceSubTitle: {
    marginTop: 7,
    fontFamily: "UrbanistRegular",
    fontSize: 15,
    color: "#606060",
  },
  choiceRightWrapper: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  priceDetailsWrapper: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  priceConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemName: { fontFamily: "UrbanistRegular", fontSize: 16 },
  price: { fontFamily: "UrbanistRegular", fontSize: 16 },
  payWithSection: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  klarnaText: {
    fontFamily: "UrbanistBold",
    color: "#f7afc4",
    fontSize: 16,
    paddingLeft: 10,
  },
  // set up wrapper for both sides so that words dont wrap
  leftChoiceWrapper: {
    flex: 1,
  },
  rightChoiceWrapper: {
    flex: 0.2,
    borderWidth: 1,
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
});
