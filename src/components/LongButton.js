import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";

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
      <View
        style={[
          styles.iconWrapper,
          iconBackground && { backgroundColor: iconBackground },
        ]}
      >
        <Image source={iconImage} />
      </View>
      <Text style={styles.btnText}>{btnText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  longBtn: {
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(115, 115, 115, 0.5)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15,
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
    fontFamily: "UrbanistSemiBold",
    fontSize: 16,
  },
});

export default LongButton;
