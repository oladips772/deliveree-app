/** @format */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import { useState } from "react";
import tw from "twrnc";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons";

const DishRow = ({ dish }) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={tw`bg-white border p-4 border-gray-300 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{dish.name}</Text>
            <Text style={tw`text-gray-400`}>{dish.short_description}</Text>
            <Text>NGN {dish.price}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(dish.image).url() }}
              style={tw`h-[60px] w-[60px] rounded-sm bg-gray-400`}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={tw`px-4 p-2 bg-white`}>
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity activeOpacity={0.6}>
              <AntDesign
                name="minuscircle"
                size={28}
                style={tw``}
                color="green"
              />
            </TouchableOpacity>
            <Text style={tw`p-2 text-lg font-bold`}>0</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <AntDesign
                name="pluscircle"
                size={28}
                style={tw``}
                color="green"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
