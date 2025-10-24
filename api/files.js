import express from "express";
import { getFilesInFolder } from "../db/queries/files.js";
const router = express.Router();
export default router;

router.route("/").get(async (req, res) => {
  const files = await getFilesInFolder();
  res.send(files);
});
