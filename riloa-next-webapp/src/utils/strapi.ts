import { StrapiPublicRoutes } from "../constants/routes";

export class Strapi {
  static async public(url: StrapiPublicRoutes, options: RequestInit = {}) {
    const baseUrl = process.env.STRAPI_BASE_URL || "";
    console.log("Strapi Base URL:", baseUrl);
    console.log("Requesting URL:", baseUrl + url);
    console.log("With options:", options);
    return this.request(baseUrl + url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${process.env.STRAPI_TOKEN || ""}`,
        cache: "no-cache",
      },
    });
  }

  static async request(url: string, options: RequestInit = {}) {
    try {
      options.headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        console.log(response);
        throw new Error(`API request failed: ${response.statusText}`);
      }
      const responseJson = await response.json();
      return responseJson.data || responseJson;
    } catch (error) {
      console.error("Error fetching API:", error);
      throw error;
    }
  }
}
