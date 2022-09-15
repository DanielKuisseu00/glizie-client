import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Search from "../components/Search";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("search");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <Search handlePress={handlePress} />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#ffffff",
    height: "100%",
  },
});

export default HomeScreen;
