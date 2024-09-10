import { Hono } from "hono";
import type { APIRoute } from "astro";

import userRoutes from "./users/index";

const app = new Hono().basePath("/api");

app.get("/posts", async (c) => {
  return c.json({
    posts: [
      { id: 1, title: "Hello World" },
      { id: 2, title: "Goodbye World" },
    ],
  });
});

app.route("/user", userRoutes);

export const ALL: APIRoute = async ({ request }) => {
  return app.fetch(request);
};
