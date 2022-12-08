import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar";
import CardPaymentList from "../components/CardPaymentList";

const PaymentMethodScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, seytCvv] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleNavBack = () => {
    navigation.pop();
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <TopBar handleNavBack={handleNavBack} topBarText="Payment Methods" />
        {/* <Text style={styles.title}>Payment Methods</Text> */}
        <Text style={styles.subTitle}> Select a payment method</Text>
        <CardPaymentList />
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    alignSelf: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    marginTop: 24,
  },
});
