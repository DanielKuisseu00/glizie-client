import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const LottieAnimatedComponent = ({ width, height }) => {
  const animation = useRef(null);

  return (
    <View
      style={{
        width: width,
        height: height,
        alignSelf: "center",
      }}
    >
      <LottieView
        autoPlay
        loop={true}
        ref={animation}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
        source={{
          uri: "https://assets1.lottiefiles.com/packages/lf20_cfzt6qrs.json",
        }}
      />
    </View>
  );
};

export default LottieAnimatedComponent;

const styles = StyleSheet.create({});
