import React from "react";
import StylistCard from "./StylistCard";
import { stylistData } from "../data/stylistData";
import { StyleSheet, View } from "react-native";

const StyleList = ({ setStylist, stylist, handleNav, limit }) => {
  return (
    <View style={styles.container}>
      {stylistData.slice(0, limit).map((item) => {
        return <StylistCard key={item.id} handleNav={handleNav} item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
  },
});

export default StyleList;
