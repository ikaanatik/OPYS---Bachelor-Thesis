import express from "express";
import auth from "./auth.js";
import user from "./user.js";
import group from "./group/index.js";
import post from "./post.js";
import question from "./question.js";
import task from "./task/index.js";
import subTask from "./subTask/index.js";
import { accessToRoute } from "../middlewares/auth/auth.js";
import { userExist } from "../middlewares/security/exits.js";
const app = express();
const globalMiddleware = [accessToRoute, userExist];
app.use("/Auth", auth);
app.use("/User", globalMiddleware, user);
app.use("/Group", globalMiddleware, group);
app.use("/Post", globalMiddleware, post);
app.use("/Question", globalMiddleware, question);
app.use("/Task", globalMiddleware, task);
app.use("/SubTask", globalMiddleware, subTask);
export default app;