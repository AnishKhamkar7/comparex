import { Hono } from "hono";
import type { AppEnv } from "./context";

const app = new Hono<AppEnv>();

export default app;
