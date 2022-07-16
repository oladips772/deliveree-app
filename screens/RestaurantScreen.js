/** @format */
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import {} from "react-native-vector-icons";

const RestaurantScreen = () => {
  const route = useRoute();
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lng,
    lat,
  } = route.params;
  console.log(title);

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: imgUrl }} style={tw`h-30 w-full`} />
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
