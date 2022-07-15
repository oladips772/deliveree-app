/** @format */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import tw from "twrnc";
import { Feather, Fontisto } from "react-native-vector-icons";
import Categories from "../components/Categories";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HomeHeader />
      {/* input view */}
      <View style={tw`flex-row items-center bg-white px-[10px] py-2`}>
        <View
          style={tw`flex-row items-center flex-1 bg-gray-300 p-[5px] rounded-sm `}
        >
          <Feather name="search" size={18} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisine"
            style={styles.input}
          />
        </View>
        <Fontisto
          name="equalizer"
          size={23}
          color="#00ccbb"
          style={tw`font-bold ml-2 mr-2`}
        />
      </View>
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    marginLeft: 7,
    fontSize: 16,
  },
  container: {},
});
