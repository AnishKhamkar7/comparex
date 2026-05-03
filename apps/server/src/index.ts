import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "API is running 🚀" });
});

app.get("/api/hello", (c) => {
  return c.json({ msg: "Hello from server" });
});

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

export default {
  port: 3001,
  fetch: app.fetch,
};
