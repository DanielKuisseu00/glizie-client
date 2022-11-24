import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import TopBar from "../components/TopBar";

const AppointmentCartScreen = ({ navigation }) => {
  const handleNavBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopBar handleNavBack={handleNavBack} topBarText={"Book Appointment"} />
        <Text>Cart</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentCartScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});
