import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { stylistData } from "../data/stylistData";
import { useFonts } from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";

const StyleList = ({ setStylist, stylist, handleNav, limit }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return stylistData.slice(0, limit).map((item) => {
    return (
      <Pressable
        key={item.id}
        onPress={() => {
          handleNav(0, item);
        }}
        style={styles.container}
      >
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.top}>
            <View style={styles.topBar}>
              <View style={styles.leftBar}></View>
              <View style={styles.rightBar}>
                <AntDesign name="hearto" size={25} color="white" />
              </View>
            </View>
            <View style={styles.left}>
              <Image
                style={styles.leftImg}
                source={{ uri: `${item.images[0]}` }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.right}>
              <View style={styles.topImg}>
                <Image
                  style={styles.leftImg}
                  source={{ uri: `${item.images[1]}` }}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.bottomImg}>
                <Image
                  style={styles.leftImg}
                  source={{ uri: `${item.images[2]}` }}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.leftWrapper}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.shopName}>{item.shopName}</Text>
              <Text style={styles.shopName}>{item.hoursOpen}</Text>
              <View></View>
            </View>
            <View style={styles.rightWrapper}>
              <View style={styles.ratingWrapper}>
                <AntDesign name="star" size={20} color="#f2c200" />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
              <Text style={styles.reviews}>({item.reviews})</Text>
              <View style={styles.profileWrapper}>
                <Image
                  style={styles.profileImg}
                  source={{ uri: `${item.avatar}` }}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  });
};

export default StyleList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  itemContainer: {
    height: 300,
    marginBottom: 24,
    borderRadius: 10,
    overflow: "hidden",
  },
  top: {
    height: "60%",
    flexDirection: "row",
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
    width: 60,
    height: 60,
    borderRadius: 80,
    backgroundColor: "white",
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
  },
  profileImg: {
    width: "100%",
    height: "100%",
  },
  rightBar: { flex: 1, alignItems: "flex-end" },
  left: {
    flex: 1,
  },
  leftImg: {
    width: "100%",
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
    height: "30%",
    flexDirection: "row",
    paddingTop: 10,
  },
  leftWrapper: {
    flex: 1,
  },
  name: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    marginBottom: 5,
  },
  shopName: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
    color: "gray",
    marginBottom: 5,
  },
  rightWrapper: {
    flex: 0.3,
    alignItems: "center",
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
  },
  reviews: {
    paddingTop: 5,
    fontFamily: "UrbanistSemiBold",
    alignSelf: "center",
    color: "gray",
  },
});
