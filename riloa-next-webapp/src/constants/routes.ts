export const ROUTES = {
  public: [{ name: "Home", path: "/" }],
};

export const STRAPI_PUBLIC_ROUTES = [{ path: "/config-riloa-site" }];
export type StrapiPublicRoutes = (typeof STRAPI_PUBLIC_ROUTES)[number]["path"];
