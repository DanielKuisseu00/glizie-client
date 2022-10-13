import { StyleSheet, View } from "react-native";
import React from "react";
import { promoData } from "../data/promoData";

import CarouselCard from "./CarouselCard";
import { FlatList } from "react-native-gesture-handler";

const PromoCarousel = () => {
  return (
    <FlatList
      contentContainerStyle={{
        paddingLeft: 24,
        marginBottom: 24,
      }}
      data={promoData}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={({ item }) => {
        return <CarouselCard />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default PromoCarousel;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "gray",
    width: "100%",
    paddingHorizontal: 24,
  },
});
