import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const id_test = import.meta.env.VITE_SANITY_PROJECT_ID;
const token_test = import.meta.env.VITE_SANITY_TOKEN;

console.log(id_test)
console.log(token_test)

export const client = createClient({
  projectId: id_test,
  dataset: "production",
  apiVersion: "2023-05-03",
  usedCdn: true,
  token: token_test,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
