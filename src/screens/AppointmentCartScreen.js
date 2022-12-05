import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import CartCard from "../components/CartCard";
import CartDisclamer from "../components/CartDisclamer";
import CartGurante from "../components/CartGurante";
import ChoosePay from "../components/ChoosePay";
import CartPriceDetails from "../components/CartPriceDetails";
import PaymentChoise from "../components/PaymentChoise";
import MessageStylist from "../components/MessageStylist";
import BookNowBtn from "../components/BookNowBtn";

const AppointmentCartScreen = ({ navigation, route }) => {
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

  const { stylist } = route.params;

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

        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "none" : "position"}
          keyboardVerticalOffset={-500}
          style={styles.container}
        >
          {/* Disclamer section*/}

          <CartDisclamer />

          {/* Cart items section */}

          <View style={styles.cartItemContainer}>
            <CartCard />
          </View>

          {/* Gurantee section  */}

          <CartGurante />

          {/* Choose how to pay section */}

          <ChoosePay />

          {/* Price Details section */}

          <CartPriceDetails />

          {/* Payment Choice section */}

          <PaymentChoise />

          {/* Messaage the host section */}

          <MessageStylist stylist={stylist} />

          {/* Book Now Section */}

          <BookNowBtn />
        </KeyboardAvoidingView>
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
  cartItemContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
