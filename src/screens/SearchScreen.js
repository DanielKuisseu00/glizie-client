import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  View,
  TextInput,
  Image,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import Suggestion from "../components/Suggestion";

export default function SearchScreen({ navigation }) {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistLight: require("../../assets/fonts/urbanist/Urbanist-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const handleNavBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar handleNavBack={handleNavBack} cart={true} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Service, Stylist, or Salon"
        />
        <View style={styles.iconContainer}>
          <IonIcon name="search" size={24} />
        </View>
      </View>
      <View style={styles.suggestionContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Popular searches</Text>
        </View>
        <View style={styles.suggestionsContainer}>
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "white",
    flex: 1,
  },
  searchContainer: {
    borderWidth: 2,
    height: 50,
    marginHorizontal: 24,
    borderRadius: 10,
    marginVertical: 24,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    paddingLeft: 24,
  },
  iconContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  suggestionContainer: {
    paddingHorizontal: 24,
  },
  titleWrapper: {
    width: "100%",
  },
  title: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    marginBottom: 24,
  },
  suggestionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
