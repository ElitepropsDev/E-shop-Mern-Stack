const multer = require("multer");
const path = require("path");

// Ensure the uploads folder exists
const fs = require("fs");
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Save files in "uploads" folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Get file extension
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ext); // Preserve original extension
  },
});

exports.upload = multer({ storage: storage });
