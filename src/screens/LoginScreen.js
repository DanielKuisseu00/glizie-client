import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default LoginScreen;
