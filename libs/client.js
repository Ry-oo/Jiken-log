import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "jikenlog",
  apiKey: process.env.API_KEY,
});
