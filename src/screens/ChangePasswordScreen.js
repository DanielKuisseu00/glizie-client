import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import TopBar from "../components/TopBar";

export default function ChangePasswordScreen({ navigation }) {
  const handleNavBack = () => {
    navigation.pop();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView>
        <TopBar handleNavBack={handleNavBack} />
        <Text>Change passwor</Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 20 : 0,
    height: "100%",
    backgroundColor: "white",
  },
});
