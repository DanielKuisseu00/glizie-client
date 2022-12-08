import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../data/colors";

const CardPaymentList = ({ handleAddCard }) => {
  return (
    <View style={styles.cardsListWrapper}>
      {/* apple pay option */}
      {Platform.OS === "ios" && (
        <Pressable style={[styles.addCardWrapper]}>
          <View style={[styles.addIconWrapper, { borderWidth: 0 }]}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/images/apple-pay.png")}
            />
          </View>
          <View style={styles.addCardTextWrapper}>
            <Text style={styles.addCardText}>Apple Pay</Text>
          </View>
        </Pressable>
      )}

      {/* add card component */}
      <Pressable onPress={handleAddCard} style={styles.addCardWrapper}>
        <View style={styles.addIconWrapper}>
          <MaterialIcons name="add" size={20} color={COLORS.ruby} />
        </View>
        <View style={styles.addCardTextWrapper}>
          <Text style={styles.addCardText}>Add a credit or Debit Card</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CardPaymentList;

const styles = StyleSheet.create({
  cardsListWrapper: {
    width: "100%",
    marginTop: 24,
  },
  addCardWrapper: {
    width: "100%",
    height: 70,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  addIconWrapper: {
    flex: 0.2,
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  addCardTextWrapper: {
    flex: 1,
    paddingLeft: 20,
  },
  addCardText: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 15,
  },
});
