import { Hono } from "hono";
import userRoutes from "./user";

const routes = new Hono();

routes.route("/users", userRoutes);

export default routes;
