import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TopBar from "../components/TopBar";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { COLORS } from "../data/colors";
import { useFonts } from "expo-font";

const SetDateScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState("");

  const today = moment().format("YYYY-MM-DD");

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleNavBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar handleNavBack={handleNavBack} />
      <Text style={styles.title}>Pick a date</Text>
      <Calendar
        style={{ width: "90%", alignSelf: "center", borderRadius: 10 }}
        // initialDate={moment().format("YYYY-MM-DD")}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          setSelectedDay(day.dateString);
        }}
        markedDates={{
          [selectedDay]: {
            marked: false,
            selected: true,
            selectedColor: "white",
            dotColor: "black",
            selectedTextColor: "black",
          },
        }}
        minDate={today}
        theme={{
          calendarBackground: COLORS.ruby,

          selectedDayBackgroundColor: COLORS.ruby,
          selectedDayTextColor: "white",
          selectedDotColor: "#166088",

          dayTextColor: "white",
          textDisabledColor: "gray",
          dotColor: "#DBE9EE",

          monthTextColor: "#DBE9EE",
          textMonthFontWeight: "bold",
          textMonthFontFamily: "UrbanistBold",

          arrowColor: "white",
        }}
        hideExtraDays={true}
      />
    </SafeAreaView>
  );
};

export default SetDateScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  title: {
    fontFamily: "UrbanistBold",
    marginLeft: 24,
    marginBottom: 15,
    fontSize: 24,
  },
});
