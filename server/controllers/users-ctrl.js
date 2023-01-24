const userModel = require("../models/users-model");
const bcrypt = require("bcryptjs");
const validateRegister = require('../validation/register-validate');

const verifyEmail = Math.floor(Math.random() * 9999)


const getAll = async (req, res) => {
  await userModel.find({}).then((users, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (users.length === 0) {
      return res.json({ success: false, massage: "no users found" });
    }
    res.status(200).json({ success: true, users });
  });
};

const getById = async (req, res) => {
  await userModel
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.json({ success: false, massage: "user is not found" });
      }
      return res.status(200).json({ success: true, user });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const logIn = async (req, res) => {
  const user = await userModel.findOne({ email }, '-password').populate("groups").populate(["events", "managers", "users"]);
  const isMatch = await bcrypt.compare(
    `${req.body.password}`,
    `${user.password}`
  );
  if (isMatch) {
    const payload = {
      id: user._id,
      email: user.email,
      avatar: user.avatar,
      groups: user.groups
    }
    res.json({ success: true, payload })
  } else {
    return res.status(400).json({ passwordIncorrect: "Password incorrect" });
  }
};

const register = async (req, res) => {
  console.log(req.body);
  const { isValid, errors } = validateRegister(req.body);
  if (!isValid) return res.status(400).json(errors)

  if (verifyEmail !== req.body.verifyEmail) return res.status(400).json({ message: "Verify is not match" });
 
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    await userModel
      .insertMany(req.body)
      .then((user) => {
        const payload = {
          id: user[0]._id,
          email: user[0].email,
        };
        return res.status(200).json({ success: true, payload })
      })
      .catch((err) => console.log(err));
  } catch (err) {
    return console.log({ success: false, err });
  }
};

const update = async (req, res) => {
  userModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.status(200).json({ sucsess: true, user }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

const deleteUser = async (req, res) => {
  await userModel
    .findByIdAndDelete(req.params.id)
    .then((user) => res.status(200).json({ success: true, user }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
module.exports = {
  getAll,
  getById,
  update,
  deleteUser,
  register,
  logIn,
};
