import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../data/colors";

const BookNowBtn = () => {
  return (
    <Pressable style={styles.bookNowBtn}>
      <Text style={styles.bookNowText}>Book now</Text>
    </Pressable>
  );
};

export default BookNowBtn;

const styles = StyleSheet.create({
  bookNowBtn: {
    width: "80%",
    height: 50,
    backgroundColor: COLORS.ruby,
    marginVertical: 24,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bookNowText: {
    fontFamily: "UrbanistBold",
    color: "white",
    fontSize: 18,
  },
});
