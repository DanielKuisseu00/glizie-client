import React, { useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Search from "../components/Search";
import StyleList from "../components/StyleList";
import { useFonts } from "expo-font";
import * as Haptics from "expo-haptics";
import PromoCarousel from "../components/PromoCarousel";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import StylistCarousel from "../components/StylistCarousel";
import { stylistData } from "../data/stylistData";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../data/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const [stylist, setStylist] = useState({});
  const sheetRef = useRef(null);
  const snapPoints = ["90%"];
  const [category, setCategory] = useState();

  const handleComponent = () => {
    return <View />;
  };

  const handleClose = () => sheetRef.current.close();

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const handlePress = () => {
    navigation.navigate("search");
  };

  const handleNav = (index, stylist) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setStylist(stylist);
    sheetRef?.current?.snapToIndex(index);
  };

  // renders
  const renderBackdrop = (props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  };

  // changes category on stylist bottom sheet
  const handleCategorySelection = (item) => {
    setCategory(item);
    console.log(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <SafeAreaView showsVerticalScrollIndicator={false}>
          <StatusBar
            translucent={true}
            barStyle={"dark-content"}
            backgroundColor={"transparent"}
          />
          <Banner />
          <Search handlePress={handlePress} />
          <Categories />
          <PromoCarousel />
          <Text style={styles.title}>Discover Pros</Text>
          <StyleList
            stylist={stylist}
            setStylist={setStylist}
            handleNav={handleNav}
            limit={2}
          />
          <PromoCarousel />
          <StyleList
            stylist={stylist}
            setStylist={setStylist}
            handleNav={handleNav}
            limit={stylistData.length}
          />
        </SafeAreaView>
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        handleComponent={handleComponent}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView
          contentContainerStyle={{
            overflow: "hidden",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          <StylistCarousel handleClose={handleClose} stylist={stylist} />
          <View style={styles.bannerWrapper}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                resizeMode="cover"
                source={{ uri: stylist.avatar }}
              />
            </View>
            <View style={[styles.detailWrapper]}>
              <Text style={styles.name}>{stylist.name}</Text>
              <View style={[styles.bioWrapper]}>
                <View style={styles.top}>
                  <View style={styles.ratingWrapper}>
                    <AntDesign name="star" size={20} color={COLORS.ruby} />
                    <Text style={styles.rating}>{stylist.rating}</Text>
                  </View>
                  <View style={styles.reviewWrapper}>
                    <Text style={styles.reviews}>
                      {stylist.reviews} reviews
                    </Text>
                  </View>
                  <View style={styles.topStylistWrapper}>
                    <MaterialCommunityIcons
                      name="medal"
                      size={20}
                      color={COLORS.ruby}
                    />
                    <Text style={styles.rating}>Top stylist</Text>
                  </View>
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.location}>{stylist.location}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.br}></View>
            <View style={styles.discountWrapper}>
              <Text style={{ flex: 1 }}>
                <Text style={styles.bold}>Lower Prices.</Text>
                Your dates are <Text style={styles.bold}>$35</Text> less than
                the avg rate of the last 60 days.
              </Text>
              <View style={{}}>
                <FontAwesome name="tags" size={30} color={"#32CD32"} />
              </View>
            </View>
            <View style={styles.br}></View>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.categoryContainer}
            >
              {stylist?.services?.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => handleCategorySelection(item)}
                    key={index}
                  >
                    <Text style={styles.categoryTitle}>{item.name}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fcfcfa",
    height: "100%",
  },
  title: {
    fontFamily: "UrbanistBold",
    fontSize: 30,
    marginBottom: 18,
    paddingLeft: 24,
  },
  bannerWrapper: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
  },
  avatarWrapper: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  detailWrapper: { flex: 1, justifyContent: "center" },
  name: {
    fontFamily: "UrbanistBold",
    fontSize: 25,
    color: COLORS.ruby,
  },
  bioWrapper: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontFamily: "UrbanistSemiBold",
    marginLeft: 5,
    fontSize: 15,
  },
  reviewWrapper: {
    marginLeft: 10,
  },
  reviews: {
    textDecorationLine: "underline",
    fontFamily: "UrbanistBold",
    fontSize: 15,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topStylistWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  location: {
    fontFamily: "UrbanistMedium",
    fontSize: 15,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  br: { borderWidth: 1, borderColor: "#e6e6e6", marginBottom: 24 },
  bold: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
  },
  discountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  categoryContainer: {
    width: "100%",
    borderWidth: 1,
  },
  categoryTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 30,
    marginRight: 20,
  },
});

export default HomeScreen;
