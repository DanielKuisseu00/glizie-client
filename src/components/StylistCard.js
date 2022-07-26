import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Reac, { useState } from "react";
import { useFonts } from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS } from "../data/colors";

const StylistCard = ({ item, handleNav }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stylist = item;

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
    UrbanistItalic: require("../../assets/fonts/urbanist/Urbanist-Italic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const width = Dimensions.get("window").width;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  return (
    <View key={item.id} style={styles.itemContainer}>
      {/* Top Section */}
      <View style={styles.top}>
        <View style={styles.topBar}>
          <View style={styles.leftBar}></View>
          <View style={styles.rightBar}>
            <AntDesign name="hearto" size={25} color="white" />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <FlatList
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            data={item.images}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => {
              return index;
            }}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    handleNav(0, stylist);
                  }}
                >
                  <Image
                    style={styles.listImages}
                    source={{ uri: `${item}` }}
                    resizeMode="cover"
                  />
                </Pressable>
              );
            }}
          />
          {/* Indicator */}
          <View style={styles.indicatorWrapper}>
            <Text style={{ color: "white", fontFamily: "UrbanistBold" }}>
              {currentIndex + 1} / {item.images.length}
            </Text>
          </View>
        </View>
      </View>
      {/* Bottom Section */}
      <Pressable
        onPress={() => {
          handleNav(0, item);
        }}
        style={styles.bottom}
      >
        <View style={styles.leftWrapper}>
          <View style={styles.profileWrapper}>
            <Image
              style={styles.profileImg}
              source={{ uri: `${item.avatar}` }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.detailWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.name}>{item.name}</Text>
              {stylist.isPro ? (
                <View style={styles.proWrapper}>
                  <Text style={styles.proText}>Pro Stylist</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.shopName}>{item.shopName}</Text>
            <Text style={styles.shopName}>{item.distance} mi away</Text>
            <View style={styles.ratingWrapper}>
              <AntDesign
                name="star"
                size={20}
                color="#ffc400"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.rating}>{item.rating}</Text>
              <Text style={styles.reviews}>{item.reviews?.length} Reviews</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default StylistCard;

const styles = StyleSheet.create({
  itemContainer: {
    height: 350,
    width: 340,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 10,
  },
  top: {
    height: "65%",
    width: 340,
    flexDirection: "row",
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  topBar: {
    flexDirection: "row",
    position: "absolute",
    height: 60,
    width: "100%",
    zIndex: 3,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  leftBar: {
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  proWrapper: {
    backgroundColor: COLORS.ruby,
    width: 100,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  proText: {
    fontFamily: "UrbanistBold",
    color: "white",
    fontSize: 15,
  },
  profileWrapper: {
    width: 60,
    height: 60,
    borderRadius: 80,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 10,
    borderColor: "teal",
    marginRight: 24,
  },
  profileImg: {
    width: "100%",
    height: "100%",
  },
  rightBar: { flex: 1, alignItems: "flex-end" },
  imageContainer: {
    width: 340,
  },
  listImages: {
    width: 340,
    height: "100%",
  },
  right: {
    flex: 1,
  },
  topImg: {
    flex: 1,
  },
  bottomImg: { flex: 1 },
  bottom: {
    height: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leftWrapper: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  detailWrapper: {
    flex: 1,
  },
  name: {
    fontFamily: "UrbanistBold",
    fontSize: 25,
    marginBottom: 3,
    marginRight: 30,
  },
  shopName: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
    color: "gray",
    marginBottom: 3,
  },
  rightWrapper: {
    flex: 0.4,
    alignItems: "center",
    backgroundColor: COLORS.ruby,
    paddingTop: 5,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-start",
  },
  rating: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
    color: "black",
  },
  reviews: {
    paddingTop: 5,
    fontFamily: "UrbanistSemiBold",
    color: "gray",
    paddingBottom: 5,
    fontSize: 15,
    marginLeft: 10,
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
  indicator: {
    width: 40,
    height: 4,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginRight: 10,
  },
});
