const User = require("../models/User");

const usersControler = {
 getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      res.status(500).send({ erors: "Server Error" });
    }
  },

  deleteUserById: async (req, res) => {
    const _id = req.params._id;
    try {
      const users = await User.findOneAndRemove({ _id});
      res.send(users);
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
  },
  editUserById: async (req, res) => {
    const _id = req.params._id;
    const { name, email, password } = req.body;
   
    try {
      const user = await User.findOneAndUpdate(
        {  _id  },
        { $set: { name, email, password } },
        { new: true }
      );
      /* if(!user){
         return res.status(400).send({msg :"User dont exist"})
       } */

      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send({ errors: "Server Error" });
    }
  },
  // @route  GET user by id

  getUserById: async (req, res) => {
    try {
      const user =
      await User.findOne({ _id:req.params._id })
      res.send(user);
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
  }
};

module.exports = usersControler;
