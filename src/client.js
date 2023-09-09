import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const id = import.meta.env.VITE_SANITY_PROJECT_ID;
// const token = import.meta.env.VITE_SANITY_TOKEN;

const id = "sefyg5lv";
const token = "sktsFyfvx14MfAQHLrlKIakCnGFrvq9sv9vg6Otijm90vg4cA3KA6UthzyorJnSuXRYSruOfSofCO9u4KOOFwg44jYAe0cmMU3MEkeTTGX9pVUHP57ma45ukMZhyGPuZzwGmq0Fz5prq5Jpjsmw0b4zkVXhWM6t0VNJpGNj6EboZLj9dsZ5d"

export const client = createClient({
  projectId: id,
  dataset: "production",
  apiVersion: "2023-05-03",
  usedCdn: true,
  token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
