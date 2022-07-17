/** @format */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const navigation = useNavigation();
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

  return (
    <ScrollView>
      <View style={tw`relative`}>
        <Image
          source={{ uri: imgUrl }}
          style={tw`h-56 w-full bg-gray-600 p-4`}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={tw`absolute top-3 left-3`}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            style={tw`p-2 bg-gray-100 text-green-400 rounded-full`}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`bg-white`}>
        <View style={tw`px-2 pt-2`}>
          <Text style={tw`text-2xl font-bold`}>{title}</Text>
          <View style={tw`flex-row items-center space-x-1`}>
            <View style={tw`flex-row itemse-center mr-1`}>
              <FontAwesome name="star" size={18} style={tw``} color="green" />
              <Text style={tw`text-sm text-gray-400 ml-1`}>
                {rating} . {genre}
              </Text>
            </View>
            <View style={tw`flex-row itemse-center`}>
              <MaterialCommunityIcons
                name="map-marker-multiple"
                size={18}
                color="gray"
              />
              <Text style={tw`text-sm text-gray-400 ml-1`}>
                Nearby {address}
              </Text>
            </View>
          </View>
          <Text style={tw`mt-2 pb-4 text-gray-500`}>{short_description}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={tw`flex-row items-center py-2 p-4 border-gray-200 border-b border-t`}
          >
            <AntDesign
              name="questioncircle"
              size={17}
              style={tw`rounded-full text-gray-600`}
            />
            <Text style={tw`font-bold text-gray-600 ml-2 flex-1`}>
              Have a food allergy?
            </Text>
            <AntDesign
              name="right"
              size={20}
              style={tw`rounded-full text-green-600`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`px-2`}>
        <Text style={tw`font-bold text-lg p-2 mb-3 `}>Menu</Text>
        {dishes?.map((dish) => (
          <DishRow dish={dish} id={dish._id} key={dish._id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
