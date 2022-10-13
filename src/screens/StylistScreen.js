import { View, Text, StyleSheet, Platform, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/TopBar";

const StylistScreen = ({ navigation }) => {
  const handleNavBack = () => {
    navigation.pop();
  };

  return (
    <ScrollView style={StyleSheet.container}>
      <SafeAreaView style={styles.container}>
        <TopBar handleNavBack={handleNavBack} />
        <Text>StylistScreen</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
});

export default StylistScreen;
