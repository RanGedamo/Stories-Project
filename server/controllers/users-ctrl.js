const userModel = require("../models/users-model");
const bcrypt = require("bcryptjs");
const validateRegister = require('../validation/register-validate');
const validateLogin = require('../validation/login-validate');
const {sendEmail} = require('../validation/emailValidation')
const verifyEmail = `${Math.floor(Math.random() * 9999)}`


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
  console.log(req.body);
  const { isValid, errors } = validateLogin(req.body);
  if (!isValid) return res.status(400).json(errors)

  const user = await userModel.findOne({ email:req.body.email }).populate("groups");
  console.log(user);
  if (!user) return res.status(400).json({ message: "email or password not exist" })

  const isMatch = bcrypt.compareSync(
    req.body.password,
    user.password
  ); 
  if(!isMatch) return res.status(400).json({message: "email or password not exist" }) 
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
      if (!user) return res.status(400).json({ message: "email is exist" })
      sendEmail(req.body.email,verifyEmail).then(res=>console.log(res)).catch(error=>console.log(error))
        console.log(verifyEmail);
        if (verifyEmail !== req.body.verifyEmail) return res.status(400).json({ verify: "Verify is not match" });

        if (user) return res.status(200).json({ success: true, payload })
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
