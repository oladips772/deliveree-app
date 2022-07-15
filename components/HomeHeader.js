/** @format */
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons, Feather } from "react-native-vector-icons";

const HomeHeader = () => {
  return (
    <View style={tw`flex-row items-center px-[10px] py-2 bg-white`}>
      <Image
        style={tw`h-8 w-8 rounded-full object-contain p-2`}
        source={{
          uri: "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        }}
      />
      <View style={tw`flex-1 ml-2`}>
        <Text style={tw`text-xs text-gray-500 font-bold`}>Deliver Now!</Text>
        <Text style={tw`text-xl font-bold flex-row items-center`}>
          Current Location
          <Feather name="chevron-down" size={20} color="#00ccbb" />
        </Text>
      </View>
      <Ionicons name="person-outline" size={25} color="#00ccbb" />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
