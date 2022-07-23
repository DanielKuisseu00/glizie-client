import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Slide from "../components/Slide";
import slideData from "../data/slideData";
import { useFonts } from "expo-font";

const width = Dimensions.get("window").width;

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endOfSlide, setEndOfSlide] = useState(false);
  const ref = useRef(null);

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);

    if (currentIndex > 1) {
      setEndOfSlide(true);
    } else if (currentIndex <= 1) {
      setEndOfSlide(false);
    }
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    if (nextSlideIndex != slideData.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextSlideIndex);
    }

    if (currentIndex > 1) {
      setEndOfSlide(true);
    } else if (currentIndex <= 1) {
      setEndOfSlide(false);
    }
  };

  const goToSignUp = () => {
    navigation.navigate("LetYouIn");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.top}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={slideData}
          style={styles.slide}
          horizontal
          keyExtractor={(item) => item.text}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Slide item={item} />;
          }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.indicatorWrapper}>
          {slideData.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentIndex === index && {
                    backgroundColor: "#FB9400",
                    width: 40,
                  },
                ]}
              />
            );
          })}
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable
            style={styles.btn}
            onPress={endOfSlide ? goToSignUp : goToNextSlide}
          >
            <Text style={styles.btnText}>
              {endOfSlide === false ? "Next" : "Get Started"}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    height: Dimensions.get("window").height * 0.7,
  },
  slide: {
    height: "100%",
  },
  bottom: {
    height: Dimensions.get("window").height * 0.3,
    paddingHorizontal: 24,
    flexDirection: "column",
  },
  indicatorWrapper: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#E0E0E0",
    marginRight: 10,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 58,
    width: "100%",
    backgroundColor: "#FB9400",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  btnText: {
    color: "white",
    fontFamily: "UrbanistBold",
  },
});

export default OnboardingScreen;
