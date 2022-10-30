import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { COLORS } from "../data/colors";
import { FlatList } from "react-native-gesture-handler";

const Services = ({ services, handleCategorySelection, category }) => {
  let flatlistRef = useRef(3);

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
    <View style={styles.wrapper}>
      {/* Category Flatlist */}
      <FlatList
        data={services}
        horizontal
        contentContainerStyle={{ paddingLeft: 24 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => {
          return item.name;
        }}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                handleCategorySelection(item);
              }}
              style={{
                borderBottomWidth: 3,
                borderColor: item === category ? "black" : "#dbdbdb",
                width: 120,
                paddingBottom: 5,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <Text style={styles.categoryTitle}>{item.name}</Text>
            </Pressable>
          );
        }}
      />
      {/* Options Flatlist */}
      <FlatList
        ref={flatlistRef}
        data={services}
        keyExtractor={(item) => {
          return item.name;
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.serviceWrapper}>
              <Text style={styles.title}>{item.name}</Text>
              {item.subServices.map((subService, index) => {
                return (
                  <View key={index} style={styles.subServiceContainer}>
                    <View style={styles.leftWrapper}>
                      <Text style={styles.subserviceTitle}>
                        {subService.title}
                      </Text>
                      <Text style={styles.subservicePrice}>
                        ${subService.price}
                      </Text>
                      <Text style={styles.description}>
                        {subService.description}
                      </Text>
                      <View style={styles.btnWrapper}>
                        <View style={styles.btn}>
                          <Text style={styles.btnText}>See Times</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rightWrapper}>
                      <Image
                        resizeMode="cover"
                        source={{ uri: subService.image }}
                        style={styles.subServiceImage}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    flex: 1,
  },
  categoryContainer: {
    flexGrow: 1,
    paddingLeft: 24,
  },
  categoryTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    marginRight: 20,
  },
  serviceWrapper: {},
  title: {
    fontFamily: "UrbanistBold",
    fontSize: 30,
    marginBottom: 24,
  },
  subServiceContainer: {
    flexDirection: "row",
    height: 150,
    marginBottom: 60,
  },
  leftWrapper: {
    flex: 1,
  },
  subserviceTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 20,
    marginBottom: 10,
  },
  subservicePrice: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontFamily: "UrbanistRegular",
    color: "gray",
    marginBottom: 10,
    fontSize: 15,
  },
  btnWrapper: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: COLORS.ruby,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  btnText: { fontFamily: "UrbanistBold", color: "white" },
  rightWrapper: { flex: 0.7 },
  subServiceImage: {
    width: "100%",
    height: "100%",
  },
});
