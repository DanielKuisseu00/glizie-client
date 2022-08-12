import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopBar from "../components/TopBar";

const ForgotPasswordScreen = ({ navigation }) => {
  const handleNavBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {/* topbar component */}
      <TopBar handleNavBack={handleNavBack} topBarText="Forgot Password" />
      {/* top section */}
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/images/Frame.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="cover"
        />
      </View>
      {/* middle section */}
      <View style={styles.middleSection}></View>
      {/* bottom section */}
      <View style={styles.bottomSection}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
  },
  topSection: {
    borderWidth: 1,
    borderColor: "teal",
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  middleSection: {
    borderWidth: 1,
    borderColor: "pink",
    flex: 1,
  },
  bottomSection: { borderWidth: 1, borderColor: "black", flex: 0.3 },
});

export default ForgotPasswordScreen;
