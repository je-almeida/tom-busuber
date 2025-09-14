"use server";
import { Strapi } from "../../utils/strapi";

export async function fetchSchema() {
  try {
    return await Strapi.public("config", {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error("Error fetching schema:", error);
    return null;
  }
}
