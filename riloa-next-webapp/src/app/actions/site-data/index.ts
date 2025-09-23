"use server";
import { Strapi } from "../../../utils/strapi";

export async function getDataSite() {
  try {
    return await Strapi.public("config-riloa-site", {
      next: { revalidate: 120 },
      cache: "force-cache",
    });
  } catch (error) {
    console.error("Error fetching schema:", error);
    return null;
  }
}
