import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS } from "../data/colors";

const MessageStylist = ({ stylist, standAlone }) => {
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
      {standAlone && (
        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </Pressable>
      )}
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
    borderWidth: 2,
    borderRadius: 10,
    textAlignVertical: "top",
    fontFamily: "UrbanistRegular",
    fontSize: 18,
    padding: 7,
  },
  submitBtn: {
    width: 100,
    height: 50,
    backgroundColor: COLORS.ruby,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 20,
    borderRadius: 7,
  },
  submitBtnText: {
    color: "white",
  },
});
