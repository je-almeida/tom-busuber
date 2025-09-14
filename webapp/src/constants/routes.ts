export const ROUTES = {
  public: [{ name: "Home", path: "/" }],
  private: [{ name: "Dashboard", path: "/dashboard" }],
  admin: [{ name: "Admin Panel", path: "/admin" }],
};

export const STRAPI_PUBLIC_ROUTES = [
  { path: "/config" },
  { path: "/form-leads" },
];
export type StrapiPublicRoutes = (typeof STRAPI_PUBLIC_ROUTES)[number]["path"];
