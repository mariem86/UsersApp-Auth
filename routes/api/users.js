const express = require("express");

const isAuth = require("../../middlewares/passeportSetup");
const router = express.Router();
const {
  getAllUsers,
  deleteUserById,
  editUserById,
  getUserById
} = require("../../controlers.js/usersControler");

//@route GET api/users
//@desc  GET ALL USERES
//@acess Public
router.get("/", getAllUsers);

//@route delete api/users
//@desc  delete ALL USERES
//@acess Private
router.delete("/deleteUser/:_id", isAuth(), deleteUserById);

//@route edit api/users
//@desc  edit ALL USERES
//@acess Private
router.put("/editUser/:_id", isAuth(), editUserById);
//@route getbyid api/user

//@acess Private
router.get("/user/:_id", isAuth(), getUserById);

module.exports = router;
