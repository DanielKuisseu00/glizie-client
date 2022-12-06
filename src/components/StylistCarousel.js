import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { FlatList } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width;

const StylistCarousel = ({ stylist, handleClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const width = Dimensions.get("window").width;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.leftbar}>
          <Pressable onPress={handleClose} style={styles.topBarBtn}>
            <Entypo name="chevron-small-left" size={30} />
          </Pressable>
        </View>
        <View style={styles.rightBar}>
          <Pressable style={styles.topBarBtn}>
            <Feather name="share" size={20} />
          </Pressable>
          <Pressable style={[styles.topBarBtn, { marginLeft: 10 }]}>
            <Feather name="heart" size={20} />
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
          }}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={stylist.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onTouchStart={() => {}}
          keyExtractor={(item) => {
            return item;
          }}
          renderItem={({ item }) => {
            return (
              <Image
                style={styles.carouselImage}
                source={{ uri: item }}
                resizeMode="cover"
              />
            );
          }}
        />
        {/* Indicator */}
        {stylist.images && (
          <View style={styles.indicatorWrapper}>
            <Text style={{ color: "white", fontFamily: "UrbanistBold" }}>
              {currentIndex + 1} / {stylist.images.length}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default StylistCarousel;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    backgroundColor: "#ebebeb",
    height: 250,
  },
  carouselImage: {
    width: WIDTH,
    height: 250,
  },
  topBar: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    flexDirection: "row",
  },
  leftbar: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 18,
  },
  topBarBtn: {
    width: 40,
    height: 40,
    borderRadius: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  rightBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 18,
    flexDirection: "row",
  },
  indicatorWrapper: {
    position: "absolute",
    zIndex: 3,
    width: 100,
    height: 30,
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
