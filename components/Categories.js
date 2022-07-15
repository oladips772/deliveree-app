/** @format */
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imageUrl="https://img.freepik.com/free-photo/plate-with-keto-diet-food-cherry-tomatoes-chicken-breast-eggs-carrot-salad-with-arugula-spinach-keto-lunch_2829-16953.jpg?w=2000"
        title="Spinachs"
      />
      <CategoryCard
        imageUrl="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"
        title="Burgers"
      />
      <CategoryCard
        imageUrl="https://images.robertharding.com/zoom/RF/DP/HORIZONTAL/1116-43538.jpg"
        title="Fries"
      />
      <CategoryCard
        imageUrl="https://www.garzablancaresort.com/blog/wp-content/uploads/2021/05/Traditional-Food-in-Puerto-Vallarta-You-Have-Try-in-Your-Next-Visit.jpg"
        title="Sea Foods"
      />
      <CategoryCard
        imageUrl="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/14/0/FN_healthy-fast-food-applebees-steak_s4x3.jpg.rend.hgtvcom.441.331.suffix/1510694267044.jpeg"
        title="Locals"
      />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
