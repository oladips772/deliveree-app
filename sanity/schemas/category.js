/** @format */
export default {
  name: "category",
  title: "Menu Category",
  type: "document", 
  fields: [
    {
      name: "name",
      title: "Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
    },
  ],
};
