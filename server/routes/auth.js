const { register, login, setAvatar, getAllUsers, logOut } = require("../controllers/usercontroller");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.post("/setavatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.get("/logout/:id", logOut);

module.exports = router;
