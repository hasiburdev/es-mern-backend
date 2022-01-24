import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  if (req.query.id) {
    getUserByQuery(req, res);
    return;
  }
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).json(req.body);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};
export const getUser = async (req, res) => {
  const user = await User.findOne({ id: req.params.userId }).exec();
  if (!user) res.status(404).json({ message: "User Not Found!" });
  res.status(200).json(user);
};
export const getUserByQuery = async (req, res) => {
  const user = await User.findOne({ id: req.query.userId }).exec();
  if (!user) res.status(404).json({ message: "User Not Found!" });
  res.status(200).json(user);
};
export const createUsers = async (req, res) => {
  try {
    await User.insertMany(req.body);
    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.end();
  }
};
