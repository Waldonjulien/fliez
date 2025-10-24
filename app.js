import express from "express";

const app = express();
export default app;
import foldersRouter from "./api/folders.js";
import filesRouter from "./api/files.js";

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);
