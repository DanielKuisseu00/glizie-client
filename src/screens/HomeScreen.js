import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import TopBar from "../components/TopBar";

const HomeScreen = ({ navigation }) => {
  const handleNabBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView>
      <TopBar handleNavBack={handleNabBack} />
      <Text>Home </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
