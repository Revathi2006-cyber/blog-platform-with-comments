const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addComment,
  getComments,
} = require("../controllers/commentController");

router.post("/:postId", protect, addComment);
router.get("/:postId", getComments);

module.exports = router;