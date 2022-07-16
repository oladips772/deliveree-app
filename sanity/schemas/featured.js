/** @format */
export default {
  name: "featured",
  title: "Featured Menu Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Featured Category Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "restaurant" }],
        },
      ],
    },
  ],
};
