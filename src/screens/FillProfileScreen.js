import React, { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Animated,
  Text,
  Platform,
} from "react-native";
import TopBar from "../components/TopBar";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const FillProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [genderSet, setGenderSet] = useState(false);

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleNavBack = () => {
    navigation.pop();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "position"}
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? -100 : 10}
      style={styles.container}
    >
      <TopBar handleNavBack={handleNavBack} topBarText="Fill Your Profile" />
      {/* Top section which contains the edit profile image button */}
      <View style={styles.profileWrapper}>
        <View style={styles.iconWrapper}>
          <Icon name={"person"} size={80} color="#adadad" />
          <Pressable
            onPress={() => console.log("clicked")}
            style={styles.editIconWrapper}
          >
            <Icon name="pencil-sharp" color="white" size={20} />
          </Pressable>
        </View>
      </View>
      {/* Middle section that will contain the middle form section */}
      <Animated.View styl={styles.formWrapper}>
        <TextInput
          name="fulName"
          placeholderTextColor={"#9E9E9E"}
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholderTextColor={"#9E9E9E"}
          name="nickName"
          style={styles.input}
          placeholder="Nick Name"
          value={nickName}
          onChangeText={setNickName}
        />
        <TextInput
          name="dateOfBirth"
          style={styles.input}
          placeholder="Date of Birth"
          keyboardType="number-pad"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholderTextColor={"#9E9E9E"}
        />

        <TextInput
          name="phoneNumber"
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor={"#9E9E9E"}
        />

        <TextInput
          name="email"
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={"#9E9E9E"}
        />
        <View style={styles.genderSelectorWrapper}>
          <Text style={styles.genderText}>Select Gender</Text>
          <View style={styles.genderBtnWrapper}>
            <Pressable
              onPress={() => {
                setGender("male");
              }}
              style={[
                styles.genderBtn,
                { backgroundColor: gender === "male" ? "#FB9400" : "#FAFAFA" },
              ]}
            >
              <Text style={styles.genderBtnText}>Male</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setGender("female");
              }}
              style={[
                styles.genderBtn,
                {
                  backgroundColor: gender === "female" ? "#FB9400" : "#FAFAFA",
                },
              ]}
            >
              <Text style={styles.genderBtnText}>Female</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setGender("other");
              }}
              style={[
                styles.genderBtn,
                { backgroundColor: gender === "other" ? "#FB9400" : "#FAFAFA" },
              ]}
            >
              <Text style={styles.genderBtnText}>Other</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
      <Pressable
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("home")}
      >
        <Text style={styles.signUpBtnText}>Sign up</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 24,
  },
  profileWrapper: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 20 : 0,
    marginBottom: Platform.OS === "ios" ? 20 : 10,
  },
  iconWrapper: {
    backgroundColor: "#f7f8fa",
    width: 140,
    height: 140,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  editIconWrapper: {
    width: 35,
    height: 35,
    backgroundColor: "#FB9400",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: -5,
  },
  formWrapper: {
    flexDirection: "row",
  },
  input: {
    height: 56,
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  genderSelectorWrapper: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  genderText: {
    fontFamily: "UrbanistBold",
    fontSize: 14,
    flex: 0.5,
  },
  genderBtnWrapper: {
    flexDirection: "row",
    width: "100%",
    flex: 2,
  },
  genderBtn: {
    height: 50,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginRight: 20,
  },
  genderBtnText: {
    fontFamily: "UrbanistRegular",
  },
  signUpBtn: {
    width: "100%",
    height: 58,
    backgroundColor: "#FB9400",
    marginTop: 24,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpBtnText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
});

export default FillProfileScreen;
