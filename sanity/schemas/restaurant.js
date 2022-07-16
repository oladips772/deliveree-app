/** @format */
export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Restaurant address",
      type: "string",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
    },
    {
      name: "lat",
      title: "Latitude of the restaurant",
      type: "string",
    },
    {
      name: "long",
      title: "Longitude of the restaurant",
      type: "string",
    },
    {
      name: "image",
      title: "Image of the restaurant",
      type: "image",
    },
    {
      name: "rating",
      title: "Enter a rating from (1-5 stars)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("please enter a value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "dish",
            },
          ],
        },
      ],
    },
  ],
};
