import React, { useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
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
import { COLORS } from "../data/colors";
import BottomSheetBanner from "../components/BottomSheetBanner";
import BottomSheetContent from "../components/BottomSheetContent";
import BottomSheetCategories from "./BottomSheetCategories";

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
          <BottomSheetBanner stylist={stylist} />
          <BottomSheetContent />
          <BottomSheetCategories
            handleCategorySelection={handleCategorySelection}
            services={stylist.services}
            category={category}
          />
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
});

export default HomeScreen;
