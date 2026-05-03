import { Hono } from "hono";
import { env } from "./env";

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
  port: env.PORT,
  fetch: app.fetch,
};
