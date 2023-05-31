const User = require("../models/UserModel");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select("name lastName email isAdmin").orFail();
        return res.send(user);
    } catch (err) {
       next(err); 
    }
}

const updateUser = async (req, res, next) => {
    try {
       const user = await User.findById(req.params.id).orFail(); 

        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;

        await user.save();

        res.send("user updated");

    } catch (err) {
       next(err); 
    }
}

const deleteUser = async (req, res, next) => {
    try {
       const user = await User.findById(req.params.id).orFail();
       await user.remove(); 
       res.send("user removed");
    } catch (err) {
        next(err);
    }
}

module.exports = { getUsers,getUser, updateUser, deleteUser };
