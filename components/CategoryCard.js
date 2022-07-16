/** @format */
import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity style={tw`mr-4 relative flex-col`} activeOpacity={0.7}>
      <Image source={{ uri: imageUrl }} style={tw`w-20 h-20 rounded-sm`} />
      <Text style={tw`absolute bottom-1 text-gray-200 font-bold left-1`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
