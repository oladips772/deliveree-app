/** @format */
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity
      style={tw`bg-white rounded-sm shadow-sm mr-2`}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: imgUrl }}
        style={tw`w-[260px] h-[170px] rounded-sm`}
      />
      <View style={tw`px-2 pb-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
          <FontAwesome name="star" size={20} style={tw``} color="green" />
          <Text style={tw`text-sm font-bold text-gray-400 ml-2`}>
            {rating} . {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <MaterialCommunityIcons
            name="map-marker-multiple"
            size={20}
            color="gray"
          />
          <Text style={tw`text-sm font-bold text-gray-600 ml-2`}>
            Nearby {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
