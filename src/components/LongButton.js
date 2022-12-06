import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { COLORS } from "../data/colors";

const LongButton = ({ btnText, iconImage, iconBackground }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Pressable onPress={() => console.log("clicked")} style={styles.longBtn}>
      {/* <View
        style={[
          styles.iconWrapper,
          iconBackground && { backgroundColor: iconBackground },
        ]}
      >
        <Image source={iconImage} />
      </View> */}
      <Text style={styles.btnText}>{btnText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  longBtn: {
    height: 60,
    width: 200,
    borderWidth: 1,
    backgroundColor: COLORS.ruby,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  iconWrapper: {
    height: 24,
    width: 24,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  btnText: {
    fontFamily: "UrbanistBold",
    fontSize: 16,
    color: "white",
  },
});

export default LongButton;
