import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  LogBox,
} from "react-native";
import TopBar from "../components/TopBar";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { COLORS } from "../data/colors";
import { useFonts } from "expo-font";
import { render } from "react-dom";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

LogBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
]);

const SetDateScreen = ({ navigation, route }) => {
  const today = moment().format("YYYY-MM-DD");
  const { hoursAvaiable, stylist } = route.params;
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

        <View style={styles.reserveBtnWrapper}>
          <Pressable style={styles.reserveBtn}>
            <Text style={styles.reserveBtnText}>Reserve</Text>
          </Pressable>
        </View>

        <View style={styles.commentWrapper}>
          {/* Title Wrapper */}
          <View style={styles.titleWrapper}>
            <View style={styles.ratingWrapper}>
              <AntDesign name="star" size={25} />
              <Text style={styles.ratingText}>{stylist.rating}</Text>
            </View>
            <View style={styles.dotDivider}></View>
            <Text style={styles.ratingText}>
              {stylist.reviews.length.toString()} Reviews
            </Text>
          </View>
          {/* Card carousel */}

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={stylist.reviews}
            keyExtractor={(item, index) => {
              return index;
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.reviewCard}>
                  {/* wrapper for top part of card */}
                  <View style={styles.reviewDataWrapper}>
                    <View style={styles.avatarWrapper}>
                      <Image
                        style={styles.avatar}
                        source={{
                          uri: item.avatar,
                        }}
                        resizeMode={"cover"}
                      />
                    </View>
                    <View style={styles.nameDateWrapper}>
                      <Text style={styles.nameText}>{item.name}</Text>
                      <Text style={styles.dateText}>{item.date.fromNow()}</Text>
                    </View>
                  </View>
                  {/* Comment body */}
                  <View style={styles.commentBody}>
                    <Text style={styles.commentText}>{item.comment}</Text>
                  </View>
                </View>
              );
            }}
          />
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
  reserveBtnWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginHorizontal: 24,
    marginTop: 25,
  },
  reserveBtn: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.ruby,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  reserveBtnText: {
    color: "white",
    fontFamily: "UrbanistBold",
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
  commentWrapper: {
    paddingHorizontal: 24,
    marginTop: 25,
  },
  titleWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    marginLeft: 5,
  },
  dotDivider: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    borderRadius: 5,
    marginHorizontal: 15,
  },
  reviewCard: {
    width: 300,
    height: 270,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginTop: 24,
    marginRight: 15,
    borderRadius: 5,
  },
  reviewDataWrapper: {
    width: "100%",
    height: "20%",
    paddingLeft: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "gray",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  nameDateWrapper: {
    marginLeft: 10,
    justifyContent: "center",
  },
  nameText: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    marginBottom: 3,
  },
  dateText: {
    fontFamily: "UrbanistRegular",
    color: "gray",
  },
  commentBody: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  commentText: {
    fontFamily: "UrbanistRegular",
    fontSize: 20,
  },
});
