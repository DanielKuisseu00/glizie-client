import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SocialButton = ({ name, iconName, color }) => {
  return (
    <Pressable onPress={() => console.log("clicked")} style={styles.socialBtn}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} color={color} size={30} />
      </View>
      <View style={styles.btnTextContainer}>
        <Text style={styles.btnText}>Continue with {name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  socialBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  btnTextContainer: {
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 24,
  },
  btnText: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 18,
  },
});

export default SocialButton;
