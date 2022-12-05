import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ChoosePay = () => {
  return (
    <View style={styles.chooseHowToPayWrapper}>
      <Text style={styles.chooseHowToPayText}>Choose how to pay</Text>

      {/* Pay all at once option card */}

      <View style={styles.payChoiceWrapper}>
        <View style={styles.choiceLeftWrapper}>
          <Text style={styles.choiceTitle}>
            Pay in full when appointment is complete.
          </Text>
        </View>
        <View style={styles.choiceRightWrapper}>
          <MaterialIcons name="radio-button-on" size={30} />
        </View>
      </View>

      {/* Pay part now and part later */}

      <View style={styles.payChoiceWrapper}>
        <View style={styles.choiceLeftWrapper}>
          <View style={styles.leftChoiceWrapper}>
            <Text style={styles.choiceTitle}>
              Or 4 interest free payments of $27.50 with{" "}
              <Text style={styles.klarnaText}>Klarna.</Text>
            </Text>
          </View>
        </View>
        <View style={styles.choiceRightWrapper}>
          <MaterialIcons name="radio-button-off" size={30} />
        </View>
      </View>
    </View>
  );
};

export default ChoosePay;

const styles = StyleSheet.create({
  chooseHowToPayWrapper: {
    padding: 24,
  },
  chooseHowToPayText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
  },
  payChoiceWrapper: {
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  choiceLeftWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  choiceTitle: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
  },
  choiceSubTitle: {
    marginTop: 7,
    fontFamily: "UrbanistRegular",
    fontSize: 15,
    color: "#606060",
  },
  choiceRightWrapper: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  klarnaText: {
    fontFamily: "UrbanistBold",
    color: "#f7afc4",
    fontSize: 16,
    paddingLeft: 10,
  },
  leftChoiceWrapper: {
    flex: 1,
  },
  rightChoiceWrapper: {
    flex: 0.2,
    borderWidth: 1,
  },
});
