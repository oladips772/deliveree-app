/** @format */
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "44c1l8qe",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
const urlFor = builder.image("image", { maxWidth: 300 });

export { client, urlFor };
