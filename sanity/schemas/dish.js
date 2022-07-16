/** @format */
export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Dish name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Dish description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Dish price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Dish image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
