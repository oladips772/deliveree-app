/** @format */
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "react-native-vector-icons";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import { client as sanityClient, urlFor } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
    type->{
      name
    }
  },
}[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View style={tw`px-4`}>
      <View style={tw`flex-row items-center justify-between mt-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <AntDesign name="arrowright" size={23} color="#00ccbb" />
      </View>
      <Text style={tw`text-gray-500 text-xs mb-2`}>{description}</Text>
      {/* scroll view cards */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            rating={4.3}
            dishes={restaurant.dishes}
            genre={restaurant.type?.name}
            lat={restaurant.lat}
            lng={restaurant.long}
            short_description={restaurant.short_description}
            title={restaurant.name}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
