"use strict";

const express = require("express");
const { upload } = require("../helpers/filehelpers");
const { singleFileUpload } = require("../controllers/fileuploaderController");

const router = express.Router();

router.post("/singlefile", upload.single("file"), singleFileUpload);

module.exports = { routes: router };
