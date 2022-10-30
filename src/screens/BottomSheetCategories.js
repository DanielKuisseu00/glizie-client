import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const BottomSheetCategories = ({
  services,
  handleCategorySelection,
  category,
}) => {
  return (
    <FlatList
      data={services}
      horizontal
      contentContainerStyle={{ paddingLeft: 24 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => {
        return item.name;
      }}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() => handleCategorySelection(item)}
            style={{
              borderBottomWidth: 3,
              borderColor: item === category ? "black" : "#dbdbdb",
              width: 120,
              paddingBottom: 5,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Text style={styles.categoryTitle}>{item.name}</Text>
          </Pressable>
        );
      }}
    />
  );
};

export default BottomSheetCategories;

const styles = StyleSheet.create({
  categoryContainer: {
    flexGrow: 1,
    paddingLeft: 24,
  },
  categoryTitle: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    marginRight: 20,
  },
});
