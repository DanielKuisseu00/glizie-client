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
            {item.images.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    currentIndex === index && {
                      backgroundColor: "white",
                      width: 20,
                    },
                  ]}
                />
              );
            })}
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
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.shopName}>{item.shopName}</Text>
          <Text style={styles.shopName}>{item.distance} mi away</Text>
        </View>
        <View style={styles.rightWrapper}>
          <View style={styles.profileWrapper}>
            <Image
              style={styles.profileImg}
              source={{ uri: `${item.avatar}` }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.ratingWrapper}>
            <AntDesign
              name="star"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
          <Text style={styles.reviews}>{item.reviews} Reviews</Text>
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
    marginBottom: 24,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0,0.20)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  top: {
    height: "60%",
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
  profileWrapper: {
    width: 50,
    height: 50,
    borderRadius: 80,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 10,
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
    height: "40%",
    flexDirection: "row",
  },
  leftWrapper: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,
  },

  name: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    marginBottom: 3,
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
  },
  rating: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
    color: "white",
  },
  reviews: {
    paddingTop: 5,
    fontFamily: "UrbanistSemiBold",
    alignSelf: "center",
    color: "white",
    paddingBottom: 5,
    fontSize: 12,
  },
  indicatorWrapper: {
    position: "absolute",
    zIndex: 3,
    width: 200,
    height: 30,
    bottom: 0,
    left: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#f7f7f7",
    marginRight: 10,
  },
});
