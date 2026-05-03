import { Hono } from "hono";
import * as handler from "./handler";

const userRoutes = new Hono();

userRoutes.get("/", handler.getUsersHandler);
userRoutes.post("/", handler.createUserHandler);

export default userRoutes;
