import { Hono } from "hono";

const users = new Hono();

users.get("/", (c) => {
  const id = c.req.param("id");
  return c.text("hellooo");
});

users.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.text(id);
});

users.get("/hello", (c) => {
  return c.json({
    name: "hello",
  });
});

users.post("/", (c) => {
  return c.text("ini post ke /user");
});

export default users;
