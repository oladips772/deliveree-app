/** @format */
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View style={tw`px-4`}>
      <View style={tw`flex-row items-center justify-between mt-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <AntDesign name="arrowright" size={23} color="#00ccbb" />
      </View>
      <Text style={tw`text-gray-500 text-xs mb-2`}>{description}</Text>
      {/* scroll view cards */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          id="1234"
          imgUrl="https://i0.wp.com/www.eatlanka.com/wp-content/uploads/2021/11/Chocolate-cake-recipe-1200a.jpg"
          address="off new road landmark 11"
          rating={4.3}
          dishes={[]}
          genre="Dinner"
          lat={30}
          lng={32}
          short_description="short cake description"
          title="Chocolate cake"
        />
        <RestaurantCard
          id="1234"
          imgUrl="https://i0.wp.com/www.eatlanka.com/wp-content/uploads/2021/11/Chocolate-cake-recipe-1200a.jpg"
          address="off new road landmark 11"
          rating={4.3}
          dishes={[]}
          genre="Dinner"
          lat={30}
          lng={32}
          short_description="short cake description"
          title="Chocolate cake"
        />
        <RestaurantCard
          id="1234"
          imgUrl="https://i0.wp.com/www.eatlanka.com/wp-content/uploads/2021/11/Chocolate-cake-recipe-1200a.jpg"
          address="off new road landmark 11"
          rating={4.3}
          dishes={[]}
          genre="Dinner"
          lat={30}
          lng={32}
          short_description="short cake description"
          title="Chocolate cake"
        />
        <RestaurantCard
          id="1234"
          imgUrl="https://i0.wp.com/www.eatlanka.com/wp-content/uploads/2021/11/Chocolate-cake-recipe-1200a.jpg"
          address="off new road landmark 11"
          rating={4.3}
          dishes={[]}
          genre="Dinner"
          lat={30}
          lng={32}
          short_description="short cake description"
          title="Chocolate cake"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
