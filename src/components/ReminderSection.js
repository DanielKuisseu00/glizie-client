import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReminderSection = ({ stylist }) => {
  return (
    <View style={styles.reminderWrapper}>
      <Text style={styles.reminderTitle}>
        Thanks for booking with {stylist.name}
      </Text>
      <Text style={styles.remindferSubtitle}>
        We Emailed you your receipt for your appointment.
      </Text>
    </View>
  );
};

export default ReminderSection;

const styles = StyleSheet.create({
  reminderWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  reminderTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    marginBottom: 10,
  },
  remindferSubtitle: {
    fontFamily: "UrbanistRegular",
    fontSize: 17,
  },
});
