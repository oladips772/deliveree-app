/** @format */
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client as sanityClient, urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category"]`)
      .then((data) => setCategories(data));
  });

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imageUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
