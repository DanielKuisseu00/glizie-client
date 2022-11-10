import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BottomSheetContent = () => {
  return (
    <View style={styles.contentWrapper}>
      {/* <View style={[styles.br, { marginBottom: 10 }]}></View> */}
      <View style={styles.discountWrapper}>
        <Text style={{ flex: 1 }}>
          <Text style={styles.bold}>Lower Prices.</Text>
          Melanie's services on average are <Text style={styles.bold}>
            $15
          </Text>{" "}
          less than the average rate in this area.
        </Text>
        <View style={{}}>
          <FontAwesome name="tags" size={30} color={"#32CD32"} />
        </View>
      </View>
      {/* <View style={[styles.br, { marginBottom: 10 }]}></View> */}
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  br: { borderWidth: 1, borderColor: "#e6e6e6" },
  bold: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
  },
  discountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
});
