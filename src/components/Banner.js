import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import { COLORS } from "../data/colors";
import { useFonts } from "expo-font";
import { bannerSlides } from "../data/bannerSlides";
import { useInterval } from "react-timing-hooks";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const width = Dimensions.get("window").width;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    if (nextSlideIndex != bannerSlides.length && currentIndex <= 2) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextSlideIndex);
    } else {
      setCurrentIndex(currentIndex - 3);
    }
  };

  useInterval(() => goToNextSlide(), 5000);

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <FlatList
      data={bannerSlides}
      style={styles.scrollView}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={ref}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "space-around",
      }}
      renderItem={({ item }) => {
        return (
          <View style={styles.bannerContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.bannerText}>{item.title}</Text>
              <View style={styles.subtitleWrapper}>
                <Text style={styles.bannerSubtitle}>{item.subTitle}</Text>
                <AntDesign name="arrowright" color={"white"} size={15} />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Image
                style={styles.bannerImage}
                source={item.image}
                resizeMode="cover"
              />
            </View>
          </View>
        );
      }}
    />
  );

  {
    /* <View style={styles.progressContainer}>
      {bannerSlides.map((item, index) => {
        return (
          <View
            key={item.id}
            style={[
              styles.progressBubble,
              currentIndex === index && {
                backgroundColor: "#2e282a",
              },
            ]}
          />
        );
      })}
    </View> */
  }
}

const styles = StyleSheet.create({
  scrollView: {
    maxWidth: "100%",
    height: 140,
  },
  bannerContainer: {
    width: Dimensions.get("screen").width,
    height: 140,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    paddingLeft: 24,
  },
  rightContainer: { flex: 0.5, backgroundColor: "pink" },
  bannerImage: {
    maxWidth: "100%",
    height: "100%",
  },
  subtitleWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  bannerText: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    flexWrap: "wrap",
    color: "white",
    marginBottom: 10,
    lineHeight: 25,
  },
  bannerSubtitle: {
    fontFamily: "UrbanistBold",
    color: "white",
    fontSize: 15,
    marginRight: 10,
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "#2e282a",
    flexDirection: "row",
  },
  progressContainer: {
    height: 10,
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  progressBubble: {
    width: 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5,
  },
  leftBanner: {
    flex: 1,
    backgroundColor: "#2e282a",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 24,
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerBtnText: {
    fontFamily: "UrbanistBold",
    color: "black",
  },
});
