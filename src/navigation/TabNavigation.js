import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Platform } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import ShopScreen from "../screens/ShopScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import IonIcon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialICons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../data/colors";
import { HomeStack } from "./stacks";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MessagesScreen from "../screens/MessagesScreen";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: Platform.OS === "android" ? 70 : 100,
        },
        tabBarActiveTintColor: COLORS.ruby,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <IonIcon name="ios-home-sharp" color={color} size={size} />
                <Text style={{ color: color, fontSize: 10 }}>Home</Text>
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="shopping-bag" color={color} size={size} />
                <Text style={{ color: color, fontSize: 10 }}>Shop</Text>
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome name="calendar" color={color} size={size} />
                <Text style={{ color: color, fontSize: 10 }}>Appointments</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Feather name="message-square" color={color} size={size} />
                <Text style={{ color: color, fontSize: 10 }}>Chat</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialICons name="account" color={color} size={size} />
                <Text style={{ color: color, fontSize: 10 }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
