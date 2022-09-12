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

  useInterval(() => goToNextSlide(), 3000);

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView
      style={{ backgroundColor: "white", paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={bannerSlides}
        style={styles.scrollView}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={ref}
        renderItem={({ item }) => {
          return (
            <View style={styles.bannerContainer} resizeMode="cover">
              {/* Banner Image */}
              <Image
                style={{ maxWidth: "100%", height: "60%" }}
                source={item.image}
                resizeMode={"cover"}
              />
              {/* Banner Bottom Container */}
              <View style={styles.bottomContainer}>
                <View style={styles.leftBanner}>
                  <Text style={styles.bannerText}>{item.title}</Text>
                </View>
                <View style={styles.rightBanner}>
                  <Pressable style={styles.bannerBtn}>
                    <Text style={styles.bannerBtnText}>Shop Now</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.progressContainer}>
        {bannerSlides.map((item, index) => {
          return (
            <View
              key={item.id}
              style={[
                styles.progressBubble,
                currentIndex === index && {
                  backgroundColor: COLORS.ruby,
                },
              ]}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxWidth: "100%",
  },
  bannerContainer: {
    maxWidth: Dimensions.get("screen").width,
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
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 24,
  },
  bannerText: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    flexWrap: "wrap",
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
    alignItems: "center",
    justifyContent: "center",
  },
  bannerBtnText: {
    fontFamily: "UrbanistBold",
    color: "white",
  },
});
