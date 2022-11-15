import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import TopBar from "../components/TopBar";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { COLORS } from "../data/colors";
import { useFonts } from "expo-font";
import { render } from "react-dom";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const SetDateScreen = ({ navigation, route }) => {
  const today = moment().format("YYYY-MM-DD");
  const { hoursAvaiable } = route.params;

  const [selectedDay, setSelectedDay] = useState("");

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
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <Text style={[styles.title, { marginTop: 15, marginBottom: 15 }]}>
          Pick an hour
        </Text>

        <View style={styles.hourPickerWrapper}>
          <FlatList
            data={hoursAvaiable}
            keyExtractor={(item) => {
              return item.time;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.timeContainer}>
                  <Text style={styles.timeContainerText}>{item.time}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.commentWrapper}>
          <View style={styles.titleWrapper}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SetDateScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontFamily: "UrbanistBold",
    marginLeft: 24,
    marginBottom: 15,
    fontSize: 24,
  },
  hourPickerWrapper: {
    width: "100%",
    height: 40,
    marginTop: 0,
  },
  timeContainer: {
    width: 100,
    height: "100%",
    backgroundColor: "#d2d2d4",
    marginHorizontal: 24,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  timeContainerText: {
    fontFamily: "UrbanistRegular",
  },
  commentWrapper: {},
  titleWrapper: {},
});
