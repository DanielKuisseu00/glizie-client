import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import { categoryData } from "../data/categoryData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../data/colors";
import { useFonts } from "expo-font";

export default function Categories() {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <FlatList
      data={categoryData}
      keyExtractor={(item) => {
        return item.key;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}
      contentContainerStyle={{
        paddingLeft: 15,
      }}
      renderItem={({ item }) => {
        return (
          <View key={item.key} style={styles.categoryItem}>
            <View style={styles.imgContainer}>
              <Image
                source={{ uri: item.img }}
                style={styles.img}
                resizeMode={"cover"}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
              {item.promo ? (
                <View style={styles.timeContainer}>
                  <MaterialCommunityIcons
                    name="lightning-bolt"
                    color={"#32CD32"}
                    size={15}
                  />
                  <Text style={styles.timeText}>PROMO</Text>
                </View>
              ) : null}
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    height: 150,
    marginBottom: 0,
  },
  categoryItem: {
    width: 100,
    marginRight: 15,
    alignItems: "center",
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 0.9,
    width: "100%",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
    marginVertical: 5,
  },
  timeText: {
    fontFamily: "UrbanistBold",
    color: "#32CD32",
  },
});
