import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const StylistBottomSheet = ({ isOpen, setClose, stylist, setOpen }) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()

    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    isOpen
      ? (translateY.value = withTiming(-SCREEN_HEIGHT * 1))
      : (translateY.value = withTiming(-SCREEN_HEIGHT * 0));
  }, [isOpen]);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        <View style={styles.topBar}>
          <View style={styles.leftBar}>
            <Pressable onPress={setClose} style={styles.iconWrapper}>
              <Ionicons name="close" size={20} color="black" />
            </Pressable>
          </View>
          <View style={styles.rightBar}>
            <View style={styles.iconWrapper}>
              <Ionicons name="heart-outline" size={20} color="black" />
            </View>
            <View style={[styles.iconWrapper, { marginLeft: 10 }]}>
              <SimpleLineIcons name="options" size={20} color="black" />
            </View>
          </View>
        </View>
        <Text>{stylist.name}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default StylistBottomSheet;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    paddingTop: 30,
  },
  topBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  leftBar: {
    flex: 1,
    paddingLeft: 24,
    justifyContent: "center",
  },
  rightBar: {
    flex: 1,
    paddingRight: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconWrapper: {
    backgroundColor: "#ebebeb",
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
