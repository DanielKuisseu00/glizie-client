import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import { COLORS } from "../data/colors";

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bannerContainer} resizeMode="cover">
          <Image
            style={{ maxWidth: "100%", height: "60%" }}
            source={require("../../assets/images/nails.jpg")}
            resizeMode={"cover"}
          />
          <View style={styles.bottomContainer}>
            <View style={styles.leftBanner}>
              <Text style={styles.bannerText}>
                Get Your Nails Ready for The Weekend
              </Text>
            </View>
            <View style={styles.rightBanner}>
              <Pressable style={styles.bannerBtn}>
                <Text style={styles.bannerBtnText}>Shop Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
  bannerContainer: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.25,
    backgroundColor: "pink",
    justifyContent: "flex-end",
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  leftBanner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 24,
  },
  bannerText: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
  },
  rightBanner: {
    flex: 0.5,

    alignItems: "center",
    justifyContent: "center",
  },
  bannerBtn: {
    width: 100,
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.ruby,
  },
  bannerBtnText: {
    fontFamily: "UrbanistBold",
    color: "white",
  },
});

export default HomeScreen;
