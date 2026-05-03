import { env } from "./env";
import app from "./hono";
import { auth } from "./lib/auth";
import routes from "./routes";
import { cors } from "hono/cors";

app.get("/", (c) => {
  return c.json({ message: "API is running 🚀" });
});

app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

app.use(
  "/api/*",
  cors({
    origin: "http://example.com",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

app.route("/api", routes);

app.get("/api/hello", (c) => {
  return c.json({ msg: "Hello from server" });
});

export default {
  port: env.PORT,
  fetch: app.fetch,
};
