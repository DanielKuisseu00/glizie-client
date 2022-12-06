import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import LottieAnimatedComponent from "../components/LottieAnimatedComponent";
import AppointmentCard from "../components/AppointmentCard";
import MessageStylist from "../components/MessageStylist";
import LongButton from "../components/LongButton";
import ReminderSection from "../components/ReminderSection";

const AppointmentConfirmationScreen = ({ navigation, route }) => {
  const { stylist } = route.params;

  const handleNavBack = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top bar section */}

        <TopBar handleNavBack={handleNavBack} />

        {/* Lottie animated component */}
        <LottieAnimatedComponent width={200} height={200} />

        {/* Reminder Section */}
        <ReminderSection stylist={stylist} />

        {/* Appointment card section */}
        <AppointmentCard />

        {/* Spacer component */}

        <View style={{ width: "100%", height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});
