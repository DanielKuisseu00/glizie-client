import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";

const MessageStylist = ({ stylist }) => {
  return (
    <View style={styles.messageHostSection}>
      <Text style={styles.messageHostText}>Message the Host</Text>
      <Text style={styles.messageHostDesc}>
        If you have any questions or special requests you can message the host
        here on the app.
      </Text>
      <View style={styles.profileWrapper}>
        <View style={styles.avatarWrapper}>
          <View
            style={{
              width: 70,
              height: 70,
              overflow: "hidden",
              borderRadius: 100,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{ uri: stylist.avatar }}
            />
          </View>
        </View>
        <View style={styles.stylistDetailsWrapper}>
          <Text style={styles.stylistDetailsText}>{stylist.name}</Text>
          <Text style={styles.stylistDetailsText}>Joined since 2020</Text>
        </View>
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Optional"
          placeholderTextColor={"gray"}
          multiline={true}
        />
      </View>
    </View>
  );
};

export default MessageStylist;

const styles = StyleSheet.create({
  messageHostSection: {
    marginHorizontal: 24,
    marginTop: 15,
  },
  messageHostText: { fontFamily: "UrbanistBold", fontSize: 24 },
  messageHostDesc: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
    marginTop: 10,
  },
  profileWrapper: {
    height: 70,
    flexDirection: "row",
    marginTop: 20,
  },
  avatarWrapper: {
    flex: 0.3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  stylistDetailsWrapper: {
    flex: 1,
    justifyContent: "center",
  },

  stylistDetailsText: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
  },
  textInputWrapper: {
    marginTop: 24,
  },
  textInput: {
    height: 150,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
    fontFamily: "UrbanistRegular",
    fontSize: 18,
  },
});
