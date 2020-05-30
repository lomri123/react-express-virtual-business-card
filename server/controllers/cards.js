const express = require("express");
const router = express.Router();
const { Auth } = require("../services/auth.js");
const { fetchCard, updateCard } = require("../services/cardActions");
const passport = require("passport");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/:id", async (req, res) => {
  try {
    const result = await fetchCard(req.params.id);
    if (result.length === 0) res.status(300).send("no user with this email");
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send("A problem occured, please try again later");
  }
});

router.put(
  "/change",
  passport.authenticate("jwt", {
    session: false
  }),
  upload.single("img"),
  async function(req, res) {
    console.log(req.file);
    const myvalues = JSON.parse(req.body.values);
    let myFilePath = false;
    if (req.file !== undefined) {
      myFilePath = req.file.path;
    }
    try {
      const result = await updateCard(req.body.username, myvalues, myFilePath);
      res.status(200).json(result);
    } catch (err) {
      res.status(300).send("couldn't update user");
    }
  }
);

// router.put("/change", Auth.verifyJwt, (req, res) =>
//   res.status(200).json({
//     msg: "OK",
//     user: req.user
//   })
// );

module.exports = router;
